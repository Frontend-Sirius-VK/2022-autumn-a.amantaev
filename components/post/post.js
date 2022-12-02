export class Post {
    constructor(parent, postModel) {
        this.parent = parent;
        this.postModel = postModel;
        console.log(postModel)
    }

    render() {
        const {text, title, subtitle, author, image_url, video_url, date, likes, dislikes, comments} = this.postModel;

        const post = document.createElement('div');
        post.classList.add('post')

        const header = document.createElement('div');
        header.classList.add('header');
        const headerAuthor = document.createElement('a');
        headerAuthor.classList.add('header-author');
        headerAuthor.textContent = author
        const headerDate = document.createElement('a');
        headerDate.classList.add('header-date');
        headerDate.textContent = date;
        header.append(headerAuthor, headerDate);

        const mainText = document.createElement('div');
        mainText.textContent = text;

        const content = document.createElement('div');
        const videoLink = document.createElement('a');
        videoLink.classList.add('video-link');
        videoLink.href = video_url;
        const imageLink = document.createElement('img');
        imageLink.classList.add('image-link');
        imageLink.src = image_url;
        videoLink.appendChild(imageLink);

        const videoContent = document.createElement('div');
        videoContent.classList.add('video-content');
        const videoTitle = document.createElement('div');
        videoTitle.classList.add('video-title')
        videoTitle.textContent = title;
        const videoSubtitle = document.createElement('div');
        videoSubtitle.classList.add('video-subtitle');
        videoSubtitle.textContent = subtitle;
        videoContent.append(videoTitle, videoSubtitle);
        content.append(videoLink, videoContent);

        post.append(header, mainText, content);
        this.parent.appendChild(post);
    }
}
