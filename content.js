// Wait for the sidebar to load
const observer = new MutationObserver(() => {
    const sidebar = document.querySelector('nav div.bg-token-sidebar-surface-primary')

    if (sidebar && !document.querySelector('#saved-chats-button')) {
        // Define save SVG icon
        const svgIcon = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke="#e8e8e8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#e8e8e8"></path> </g></svg>
        `;

        // Add "Saved chats" button
        const savedChatsButton = document.createElement('div');
        savedChatsButton.id = 'saved-chats-button';
        savedChatsButton.innerHTML = `${svgIcon} Saved Chats`;
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

        // Add hover actions to chats
        
    }
});

observer.observe(document.body, { childList: true, subtree: true });
