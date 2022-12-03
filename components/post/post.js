export class Post {
    constructor(parent, postModel) {
        this.parent = parent;
        this.postModel = postModel;
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
        mainText.classList.add('text');
        mainText.textContent = text;

        const content = document.createElement('div');
        content.classList.add('video-container');
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

        const ratingContent = document.createElement('div');
        ratingContent.classList.add('rating-content');
        const likesBlock = document.createElement('div');
        likesBlock.classList.add('likes-block');
        const likesInput = document.createElement('input');
        likesInput.classList.add('likes-input')
        likesInput.type = 'image';
        likesInput.src = '';
        const likesCount = document.createElement('a');
        likesCount.classList.add('likes-count');
        likesCount.textContent = likes;
        likesBlock.append(likesInput, likesCount);
        const dislikesBlock = document.createElement('div');
        dislikesBlock.classList.add('dislikes-block');
        const dislikesInput = document.createElement('input');
        dislikesInput.classList.add('dislikes-input')
        dislikesInput.type = 'image';
        dislikesInput.src = '';
        const dislikesCount = document.createElement('a');
        dislikesCount.classList.add('dislikes-count');
        dislikesCount.textContent = dislikes;
        dislikesBlock.append(dislikesInput, dislikesCount);
        const commentsBlock = document.createElement('div');
        commentsBlock.classList.add('comments-block');
        const commentsInput = document.createElement('input');
        commentsInput.classList.add('comments-input')
        commentsInput.type = 'image';
        commentsInput.src = '';
        const commentsCount = document.createElement('a');
        commentsCount.classList.add('comments-count');
        commentsCount.textContent = comments;
        commentsBlock.append(commentsInput, commentsCount);
        ratingContent.append(likesBlock, dislikesBlock, commentsBlock);

        post.append(header, mainText, content, ratingContent);
        this.parent.appendChild(post);
    }
}
