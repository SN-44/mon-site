// Récupère les dossiers depuis localStorage
function loadFolders() {
  return JSON.parse(localStorage.getItem('folders')) || [];
}

// Sauvegarde les dossiers dans localStorage
function saveFolders(folders) {
  localStorage.setItem('folders', JSON.stringify(folders));
}

// Crée un nouveau dossier avec la structure complète
function createFolder(name) {
  return {
    id: Date.now(),
    name: name,
    checkedStates: {
      'visite-technique': false,
      'suivi-chantier': false,
      'mise-en-service': false
    },
    // Ici tu peux ajouter d'autres propriétés spécifiques aux onglets
  };
}

// Exemple d'ajout d'un dossier
function addFolder(name) {
  const folders = loadFolders();
  folders.push(createFolder(name));
  saveFolders(folders);
  return folders;
}

// Exemple de suppression par id
function deleteFolder(id) {
  let folders = loadFolders();
  folders = folders.filter(f => f.id !== id);
  saveFolders(folders);
  return folders;
}

// Exemple de mise à jour checkbox
function updateFolderCheck(id, key, value) {
  const folders = loadFolders();
  const folder = folders.find(f => f.id === id);
  if (folder) {
    folder.checkedStates[key] = value;
    saveFolders(folders);
  }
  return folders;
}
