document.querySelectorAll('.expandable').forEach(section => {
    const header = section.querySelector('.expandable-header');
    const content = section.querySelector('.expandable-content');
    header.addEventListener('click', () => {
        const isOpen = content.classList.contains('open');
        document.querySelectorAll('.expandable-content').forEach(c => c.classList.remove('open'));
        if (!isOpen) {
            content.classList.add('open');
        }
    });
});
