export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        this.mainContainer = document.createElement('div');
        this.mainContainer.classList.add('main-header');
        this.subContainer = document.createElement('div');
        this.subContainer.classList.add('sub-header');

        const sidebarHamburgerDiv = document.createElement('div');
        sidebarHamburgerDiv.classList.add('sidebar-hamburger-div');
        const sidebarHamburgerBtn = document.createElement('button');
        sidebarHamburgerBtn.classList.add('sidebar-hamburger-btn');
        const sidebarHamburgerImg = document.createElement('img');
        sidebarHamburgerImg.classList.add('sidebar-hamburger-img');
        sidebarHamburgerImg.src = '/backend/images/hamburger_icon.svg';
        sidebarHamburgerBtn.append(sidebarHamburgerImg);
        sidebarHamburgerDiv.append(sidebarHamburgerBtn);

        const logoDiv = document.createElement('div');
        logoDiv.classList.add('logo-div');
        const logoImg = document.createElement('img');
        logoImg.classList.add('logo-img');
        logoImg.src = '/backend/images/logo.svg';
        logoDiv.append(logoImg);

        const searchBox = document.createElement('div');
        searchBox.classList.add('search-box');
        const searchInput = document.createElement('input');
        searchInput.classList.add('search-input');
        searchInput.placeholder = 'Введите запрос';
        const searchBtn = document.createElement('button');
        searchBtn.classList.add('search-btn');
        const searchImg = document.createElement('img');
        searchImg.classList.add('search-img');
        searchImg.src = '/backend/images/search.svg';
        searchBtn.append(searchImg);
        searchBox.append(searchInput, searchBtn);

        const mainTabDiv = document.createElement('div');
        mainTabDiv.classList.add('main-tab-div');
        const mainTabLink = document.createElement('a');
        mainTabLink.classList.add('main-tab-a');
        mainTabLink.textContent = 'Главная';
        mainTabDiv.append(mainTabLink);
        const videoTabDiv = document.createElement('div');
        videoTabDiv.classList.add('video-tab-div');
        const videoTabLink = document.createElement('a');
        videoTabLink.classList.add('video-tab-a');
        videoTabLink.textContent = 'Видео';
        videoTabDiv.append(videoTabLink);
        const communityTabDiv = document.createElement('div');
        communityTabDiv.classList.add('community-tab-div');
        const communityTabLink = document.createElement('a');
        communityTabLink.classList.add('community-tab-a');
        communityTabLink.textContent = 'Сообщество';
        communityTabDiv.append(communityTabLink);
        const aboutTabDiv = document.createElement('div');
        aboutTabDiv.classList.add('about-tab-div');
        const aboutTabLink = document.createElement('a');
        aboutTabLink.classList.add('about-tab-a');
        aboutTabLink.textContent = 'О канале';
        aboutTabLink.href = '/about';
        aboutTabDiv.append(aboutTabLink);

        this.mainContainer.append(sidebarHamburgerDiv, logoDiv, searchBox);
        this.subContainer.append(mainTabDiv, videoTabDiv, communityTabDiv, aboutTabDiv);
        this.parent.append(this.mainContainer, this.subContainer);
    }
}
