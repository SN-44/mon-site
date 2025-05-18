// folders.js

function loadFolders() {
  return JSON.parse(localStorage.getItem('folders')) || [];
}

function saveFolders(folders) {
  localStorage.setItem('folders', JSON.stringify(folders));
}

function deleteFolder(id) {
  let folders = loadFolders();
  folders = folders.filter(folder => folder.id !== id);
  saveFolders(folders);
}

function updateFolderCheck(id, key, value) {
  let folders = loadFolders();
  const folder = folders.find(f => f.id === id);
  if (folder) {
    folder.checkedStates[key] = value;
    saveFolders(folders);
  }
}
