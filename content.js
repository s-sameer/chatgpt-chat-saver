const saveIcon = `
    <svg viewBox="0 0 24 24" version="1.1" height="18" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#e8e8e8" stroke="#e8e8e8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Save</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Education" transform="translate(-96.000000, -48.000000)" fill-rule="nonzero"> <g id="bookmark_fill" transform="translate(96.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M4,5 C4,3.34315 5.34315,2 7,2 L17,2 C18.6569,2 20,3.34315 20,5 L20,21.0284 C20,22.2485 18.6209,22.9581 17.6281,22.249 L12,18.2289 L6.37186,22.249 C5.37906,22.9581 4,22.2485 4,21.0284 L4,5 Z" id="路径" fill="#e8e8e8"> </path> </g> </g> </g> </g></svg>
`;
const saveIconGreen = `
    <svg viewBox="0 0 24 24" version="1.1" height="18" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#1cba86"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Saved</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Education" transform="translate(-96.000000, -48.000000)" fill-rule="nonzero"> <g id="bookmark_fill" transform="translate(96.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M4,5 C4,3.34315 5.34315,2 7,2 L17,2 C18.6569,2 20,3.34315 20,5 L20,21.0284 C20,22.2485 18.6209,22.9581 17.6281,22.249 L12,18.2289 L6.37186,22.249 C5.37906,22.9581 4,22.2485 4,21.0284 L4,5 Z" id="路径" fill="#1cba86"> </path> </g> </g> </g> </g></svg>
`;

const observer = new MutationObserver(() => {
    const sidebar = document.querySelector('[data-testid="sidebar-item-library"]');

    if (sidebar && !document.querySelector('#saved-chats-button')) {
        createSavedChatsButton(sidebar);
        createSavedChatsList();
        loadSavedChats();
    }

    addSaveIconsToChatItems(saveIcon);
});

observer.observe(document.body, { childList: true, subtree: true });

function createSavedChatsButton(sidebar) {
    const savedChatsButton = document.createElement('div');
    savedChatsButton.id = 'saved-chats-button';
    savedChatsButton.innerHTML = `
        <span style="display: flex; align-items: center; gap: 7px;">
            ${saveIcon} 
            <span>Saved Chats</span>
        </span>
    `;
    savedChatsButton.className = 'group __menu-item gap-1.5';

    savedChatsButton.addEventListener('mouseenter', () => {
        savedChatsButton.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });

    savedChatsButton.addEventListener('mouseleave', () => {
        savedChatsButton.style.backgroundColor = getComputedStyle(sidebar).backgroundColor;
    });

    savedChatsButton.addEventListener('click', () => {
        const savedChatsList = document.getElementById('saved-chats-list');
        savedChatsList.style.display =
            savedChatsList.style.display === 'none' ? 'flex' : 'none';
    });

    sidebar.insertAdjacentElement('afterend', savedChatsButton);
}

function createSavedChatsList() {
    const savedChatsList = document.createElement('div');
    savedChatsList.id = 'saved-chats-list';
    savedChatsList.style.display = 'none';
    savedChatsList.style.flexDirection = 'column';
    savedChatsList.className = 'mx-[3px] last:mb-5 mt-5 text-primary overflow-hidden';

    const savedChatsButton = document.getElementById('saved-chats-button');
    savedChatsButton.insertAdjacentElement('afterend', savedChatsList);
}

function createSaveIconWrapper() {
    const saveIconWrapper = document.createElement('span');
    saveIconWrapper.className = 'save-icon-wrapper';
    saveIconWrapper.innerHTML = saveIcon;
    return saveIconWrapper;
}

function attachSaveIconClickEvent(chatItem, saveIconWrapper) {
    saveIconWrapper.addEventListener('click', (event) => {
        // prevent default link behavior
        event.preventDefault();

        const savedChatsList = document.getElementById('saved-chats-list');
        const isSaved = isChatSaved(chatItem);

        if (!isSaved) {
            saveIconWrapper.innerHTML = saveIconGreen;
            saveChat(chatItem, chatItem.href, savedChatsList);
        } else {
            removeSavedChat(chatItem.href, savedChatsList);
        }
    });
}

function isChatSaved(anchorTag) {
    const savedChats = JSON.parse(localStorage.getItem('savedChats')) || {};
    return anchorTag && savedChats[anchorTag.href];
}

function resetChatState(href) {
    // Use both absolute and relative href to ensure we find the chat item
    const relativeHref = href.replace(window.location.origin, '');
    const originalChatItem = document.querySelector(`aside a[href="${relativeHref}"]`);
    
    if (originalChatItem) {
        const originalSaveIconWrapper = originalChatItem.querySelector('.save-icon-wrapper');
        if (originalSaveIconWrapper) {
            originalSaveIconWrapper.innerHTML = saveIcon; // Reset to default icon
        }
    }
}

function saveChat(chatItem, href, savedChatsList) {
    const clonedChat = cloneChatItem(chatItem);
    setupClonedSaveIcon(clonedChat, href, savedChatsList);
    savedChatsList.appendChild(clonedChat);
    saveChatToLocalStorage(href, clonedChat);
}

function cloneChatItem(chatItem) {
    const clonedChat = chatItem.cloneNode(true);
    return clonedChat;
}

function setupClonedSaveIcon(clonedChat, href, savedChatsList) {
    const clonedSaveIconWrapper = clonedChat.querySelector('.save-icon-wrapper');
    clonedSaveIconWrapper.style.right = '3%';
    clonedSaveIconWrapper.addEventListener('click', (e) => {
        e.preventDefault();
        removeSavedChat(href, savedChatsList);
    });

    const button = clonedChat.querySelector('button');
    if (button) {
        button.style.display = 'none'; // Hide the button in the saved chat
    }
}

function saveChatToLocalStorage(href, chatHTML) {
    let savedChats = JSON.parse(localStorage.getItem('savedChats')) || {};
    savedChats[href] = chatHTML.outerHTML;
    localStorage.setItem('savedChats', JSON.stringify(savedChats));
}

function loadSavedChats() {
    let savedChats = JSON.parse(localStorage.getItem('savedChats')) || {};
    const savedChatsList = document.getElementById('saved-chats-list');
    Object.entries(savedChats).forEach(([href, chatHTML]) => {
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = chatHTML;
        const chatItem = tempContainer.firstElementChild;

        chatItem.querySelector('.save-icon-wrapper').addEventListener('click', (e) => {
            e.preventDefault();
            removeSavedChat(href, savedChatsList);
        });

        savedChatsList.appendChild(chatItem);
    });
}

function removeChatFromLocalStorage(href) {
    let savedChats = JSON.parse(localStorage.getItem('savedChats')) || {};
    delete savedChats[href];
    localStorage.setItem('savedChats', JSON.stringify(savedChats));
}

function removeSavedChat(href, savedChatsList) {
    // Find the saved chat item in the saved chats list
    const savedChatItem = Array.from(savedChatsList.children).find(item => {
        // The item itself is the anchor, no need to search for nested anchors
        return item.href === href || item.getAttribute('href') === href;
    });

    if (savedChatItem) {
        // Remove it from the saved chats list and local storage
        savedChatItem.remove();
        removeChatFromLocalStorage(href);
        
        // Reset the original chat item's icon if it exists
        resetChatState(href);
    }
}

function addSaveIconsToChatItems() {
    // Find all chat items
    const chatItems = document.querySelectorAll('aside a[href^="/c/"]');
    if (chatItems.length === 0) return;

    chatItems.forEach((chatItem) => {
        // Skip if already has a save icon
        if (chatItem.querySelector('.save-icon-wrapper')) return;

        chatItem.style.position = 'relative';

        // Create save icon wrapper
        const saveIconWrapper = createSaveIconWrapper();
        saveIconWrapper.style.position = 'absolute';
        saveIconWrapper.style.right = '30px';
        saveIconWrapper.style.display = 'none'; // Hidden by default

        // Show/hide the save icon on hover
        chatItem.addEventListener('mouseenter', () => {
            saveIconWrapper.style.display = 'inline-block';
        });
        chatItem.addEventListener('mouseleave', () => {
            saveIconWrapper.style.display = 'none';
        });

        // Attach click event
        attachSaveIconClickEvent(chatItem, saveIconWrapper);

        chatItem.appendChild(saveIconWrapper);

        // Check if this chat is already saved
        if (isChatSaved(chatItem)) {
            saveIconWrapper.innerHTML = saveIconGreen;
        }
    });
}
