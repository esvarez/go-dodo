// Background service worker for Go Dodo Extension
// This runs in the background and handles extension events

chrome.runtime.onInstalled.addListener(() => {
  console.log('Go Dodo Task Manager extension installed!');

  // Initialize storage with empty tasks array if not exists
  chrome.storage.local.get(['tasks'], (result) => {
    if (!result.tasks) {
      chrome.storage.local.set({ tasks: [] });
    }
  });
});

// Handle messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getTasks') {
    chrome.storage.local.get(['tasks'], (result) => {
      sendResponse({ tasks: result.tasks || [] });
    });
    return true; // Keep message channel open for async response
  }

  if (request.action === 'saveTasks') {
    chrome.storage.local.set({ tasks: request.tasks }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});
