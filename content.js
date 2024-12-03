const observer = new MutationObserver(() => {
    const sidebar = document.querySelector('nav div.bg-token-sidebar-surface-primary')
    const saveIcon = `
         <svg viewBox="0 0 24 24" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.25 3.5C7.45507 3.5 6 4.95507 6 6.75V24.75C6 25.0348 6.16133 25.2951 6.41643 25.4217C6.67153 25.5484 6.97638 25.5197 7.20329 25.3475L14 20.1914L20.7967 25.3475C21.0236 25.5197 21.3285 25.5484 21.5836 25.4217C21.8387 25.2951 22 25.0348 22 24.75V6.75C22 4.95507 20.5449 3.5 18.75 3.5H9.25Z" fill="#e7e4e4"></path> </g></svg>
    `;

    if (sidebar && !document.querySelector('#saved-chats-button')) {
        createSavedChatsButton(sidebar, saveIcon);
        createSavedChatsList();
        loadSavedChats();
    }

    addSaveIconsToChatItems(saveIcon);
});

observer.observe(document.body, { childList: true, subtree: true });

function createSavedChatsButton(sidebar, saveIcon) {
    const savedChatsButton = document.createElement('div');
    savedChatsButton.id = 'saved-chats-button';
    savedChatsButton.innerHTML = `${saveIcon} Saved Chats`;
    savedChatsButton.className = 'text-sm grow overflow-hidden text-ellipsis whitespace-nowrap text-token-text-primary';

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
    const savedChatsList = document.createElement('ol');
    savedChatsList.id = 'saved-chats-list';
    savedChatsList.style.display = 'none';
    savedChatsList.style.flexDirection = 'column';
    savedChatsList.className = 'text-sm grow overflow-hidden text-ellipsis whitespace-nowrap text-token-text-primary';

    const savedChatsButton = document.getElementById('saved-chats-button');
    savedChatsButton.insertAdjacentElement('afterend', savedChatsList);
}

function createSaveIconWrapper(saveIcon) {
    const saveIconWrapper = document.createElement('span');
    saveIconWrapper.innerHTML = saveIcon;
    saveIconWrapper.className = 'save-icon-wrapper';
    saveIconWrapper.style.cursor = 'pointer';
    saveIconWrapper.style.marginLeft = '10px';
    saveIconWrapper.style.display = 'none'; // Hidden by default
    saveIconWrapper.style.position = 'absolute';
    saveIconWrapper.style.right = '15%';
    saveIconWrapper.style.top = '50%';
    saveIconWrapper.style.transform = 'translateY(-50%)';
    return saveIconWrapper;
}

function attachHoverEvents(chatItem, saveIconWrapper) {
    chatItem.addEventListener('mouseenter', () => {
        saveIconWrapper.style.display = 'block';
    });

    chatItem.addEventListener('mouseleave', () => {
        saveIconWrapper.style.display = 'none';
    });
}

function attachSaveIconClickEvent(chatItem, saveIconWrapper) {
    saveIconWrapper.addEventListener('click', (event) => {
        const savedChatsList = document.getElementById('saved-chats-list');
        const anchorTag = chatItem.querySelector('a');
        const isSaved = Array.from(savedChatsList.querySelectorAll('li a')).some(item => item.href === anchorTag.href);

        if (!isSaved) {
            saveChat(chatItem, anchorTag.href, savedChatsList);
        }
    });
}

function saveChat(chatItem, href, savedChatsList) {
    const clonedChat = chatItem.cloneNode(true);
    clonedChat.querySelector('div.bg-token-sidebar-surface-secondary')?.classList?.remove('bg-token-sidebar-surface-secondary')?.add('hover:bg-token-sidebar-surface-secondary');
    clonedChat.querySelector('a').querySelector('div').querySelector('div')?.remove();

    const clonedSaveIconWrapper = clonedChat.querySelector('.save-icon-wrapper');
    clonedSaveIconWrapper.style.right = '4%';

    clonedSaveIconWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        clonedChat.remove();
        removeChatFromLocalStorage(href);
    });

    savedChatsList.appendChild(clonedChat);
    saveChatToLocalStorage(href, clonedChat);
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
            e.stopPropagation();
            chatItem.remove();
            removeChatFromLocalStorage(href);
        });

        savedChatsList.appendChild(chatItem);
    });
}

function removeChatFromLocalStorage(href) {
    let savedChats = JSON.parse(localStorage.getItem('savedChats')) || {};
    delete savedChats[href];
    localStorage.setItem('savedChats', JSON.stringify(savedChats));
}

function addSaveIconsToChatItems(saveIcon) {
    const chatItems = document.querySelectorAll('li[data-testid^="history-item-"]');
    chatItems.forEach((chatItem) => {
        if (chatItem.querySelector('.save-icon-wrapper')) return;

        const saveIconWrapper = createSaveIconWrapper(saveIcon);
        attachHoverEvents(chatItem, saveIconWrapper);
        attachSaveIconClickEvent(chatItem, saveIconWrapper);

        chatItem.style.position = 'relative';
        chatItem.appendChild(saveIconWrapper);
    });
}
