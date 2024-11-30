// Wait for the sidebar to load
const observer = new MutationObserver(() => {
    const sidebar = document.querySelector('nav div.bg-token-sidebar-surface-primary')
    const saveIcon = `
         <svg viewBox="0 0 24 24" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.25 3.5C7.45507 3.5 6 4.95507 6 6.75V24.75C6 25.0348 6.16133 25.2951 6.41643 25.4217C6.67153 25.5484 6.97638 25.5197 7.20329 25.3475L14 20.1914L20.7967 25.3475C21.0236 25.5197 21.3285 25.5484 21.5836 25.4217C21.8387 25.2951 22 25.0348 22 24.75V6.75C22 4.95507 20.5449 3.5 18.75 3.5H9.25Z" fill="#e7e4e4"></path> </g></svg>
    `;
    if (sidebar && !document.querySelector('#saved-chats-button')) {
        // Add "Saved chats" button
        const savedChatsButton = document.createElement('div');
        savedChatsButton.id = 'saved-chats-button';
        savedChatsButton.innerHTML = `${saveIcon} Saved Chats`;
        savedChatsButton.className = 'text-sm grow overflow-hidden text-ellipsis whitespace-nowrap text-token-text-primary';

        // Add hover effect
        savedChatsButton.addEventListener('mouseenter', () => {
            savedChatsButton.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });

        savedChatsButton.addEventListener('mouseleave', () => {
            savedChatsButton.style.backgroundColor = getComputedStyle(sidebar).backgroundColor;
        });

        // Create the list of saved chats
        const savedChatsList = document.createElement('div');
        savedChatsList.id = 'saved-chats-list';
        savedChatsList.style.display = 'none'; // Initially hidden
        savedChatsList.style.flexDirection = 'column';

        // Toggle visibility of the saved chats list
        savedChatsButton.addEventListener('click', () => {
            savedChatsList.style.display =
                savedChatsList.style.display === 'none' ? 'block' : 'none';
        });

        // Append the button and list before the next sibling of the sidebar
        sidebar.parentNode.insertBefore(savedChatsButton, sidebar.nextSibling);
        sidebar.parentNode.insertBefore(savedChatsList, savedChatsButton.nextSibling);
    }

     // Add hover actions to chats
     const chatItems = document.querySelectorAll('li[data-testid^="history-item-"]'); // Adjust this selector based on your chat list structure
     if (chatItems.length > 0){
        observer.disconnect();
        
        chatItems.forEach((chatItem) => {
            // Create the save icon
            const saveIconWrapper = document.createElement('span');
            saveIconWrapper.innerHTML = saveIcon;
            saveIconWrapper.style.cursor = 'pointer';
            saveIconWrapper.style.marginLeft = '10px';
            saveIconWrapper.style.display = 'none'; // Hidden by default
            saveIconWrapper.style.position = 'absolute';
            saveIconWrapper.style.right = '15%';
            saveIconWrapper.style.top = '50%';
            saveIconWrapper.style.transform = 'translateY(-50%)';
   
            // Show the save icon on hover
            chatItem.addEventListener('mouseenter', () => {
                saveIconWrapper.style.display = 'block';
            });
   
            // Hide the save icon when the mouse leaves
            chatItem.addEventListener('mouseleave', () => {
                saveIconWrapper.style.display = 'none';
            });
   
            // Handle save icon click
            saveIconWrapper.addEventListener('click', () => {
                const clonedChat = chatItem.cloneNode(true);
                clonedChat.querySelector('span').remove(); // Remove duplicate save icon
                savedChatsList.appendChild(clonedChat); // Add to saved chats
            });
   
            // Add save icon wrapper to the chat item
            chatItem.style.position = 'relative'; 
            chatItem.appendChild(saveIconWrapper);
        });
     }
});

observer.observe(document.body, { childList: true, subtree: true });

