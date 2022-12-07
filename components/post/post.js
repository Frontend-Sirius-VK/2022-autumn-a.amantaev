export class Post {
    constructor(parent, postModel) {
        this.parent = parent;
        this.postModel = postModel;
    }

    render() {
        // TODO убрать хардкод
        const likeUrl = 'data:image/png;base64,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';
        const dislikeUrl = 'data:image/png;base64,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'
        const commentUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAbFBMVEX///8AAAAmJiZGRkbV1dXu7u74+PgwMDA3Nze7u7uGhoa/v78PDw9gYGBlZWWYmJjl5eVQUFCOjo5ubm6wsLB4eHifn5+qqqpbW1sUFBQeHh7f39/S0tKjo6Pp6enDw8M+Pj6BgYF0dHRTU1M7muleAAAEsklEQVR4nO2d63aqMBBGqRdQsXivt5Zqff93rJ7TnmNgkmAgmXyu2f/aVV3fVigwTIYkuSPNJ7vD9AWY6eF1+ZkmNIOCO15XrI6E3nzBHatLimHV74M7UtesVb8Vd57uOd/7Pc3ed0/x32/DncUPm1+/NXcSX/zsh0PuHP5In3cH/Mvq5nfkTuGT8ir4xR3CJ5OrIHcGr+yT5J07g1+OyVvlN5VTHDTGNZ3KQb52korGXPWZJH3l5w/ufO2ZKUJFklU2WXjUfyqLpPdcW+j1ul0R6osgHCKIjgiiI4LoiCA6IoiOCKIjguiIIDoiiI4IoiOC6IggOiKIjgiiI4LoiCA6IoiOCNopyyELpW5BRKeCc87+9UXuXbDa2haahWdBbr9bYp+CZUgVDTOfgudwHnp8Cqp/zMTAn2Aa0kPL+NkFP/0JJqOQIjrmHgXVbloeeuaILY+DIU00WLbQloL8ixAmloRtT9W4Dd9sAdtfTax3GReLWYN8cj2IjgiiI4LoiCA6IoiOCKIjguiIIDoiiI4IoiOC6IggOiKIjgiiI4LoiKCNNF9OvLMcN+os9CEYrFvN1rLlSTDgqMfClsWHYNBuQ7fvsJVg4FYnp/2wlWDgacDb4ILncHI3NuY0HgQD92u/BhdchtRr0NXUueBnSD1rZ6gHwcDNeC5+LQWDfoUNFkl0LhjyQOF0kGh/LjpQZ+Z6o2/pPfcmmCRlPvZObulb9ioYOSKIjgiiI4LoiCA6IoiOCKIjguiIIDoiiI4IoiOC6IggOiKIjgiiI4LoiCA6IoiOCKIjguiIIDoiiI4IolMVzJSf3Zv8okEdL7lI1PbPNXe89mwVoaKyUmDvvOgrFiqLc87VqbbZO3fCdrwfVJ8t0WY+NTPaNP4MhrPdaRSUmszAab3VpdmGHMPI42uMwuFlWRM/zuc2/HJb/eQ0tXdl93vtOqwLx1uSk8srS5vfouusLlz+RDm6vNQ2LTnQ6goLP+ctE4eXfpn9nLaKzvm3Rtbh4zYu7Usz+xsE4C7j40P6TYJpFI+lUB8P8/C/BIPgcO8j7sNUVqk/uh/qBWN4LswLsUZ98Nh+oxWcewr8GBm1di1/ZE/UCTodc7qmr1taOZ9dmr6HRjACv92b7ao9JUnGytvQgtRpX6+k39ALFjUjuV2QWuGbwVxC2wXHhN8pcMoWWAWp9cvWJ5VFhE1wS/jZnzUXERZBatLMjiOnM2ZBqjzhNGuDD6MgdabX4Ko/KkyCZ8LPaRgMJwZBqry05MrpjF6Qqsvh+ekFqfNX+wOu4kMnSF0rfzDmdEYjSNVzHAelMEMKplT5DPQeHCVIls/cBvnwQwgOD4Sf7QGI0VIXJMtnuPcXa4Jk+ezIHdOdqiBZPgP2qwgW5PcH3aShCo6mhJ/1nlrU5ISRwh68i8gm2IMpn2mwCOKUB3WYBU/c8dpjFEQqD+owCV64w3WBQdBxInZk6AXRymcatIJw5TMNOkGnScMxohEELJ9poAVdnykQIaQgZPlMAyUIWl6iIQSdBn1HS10QtrxEU+sweDK/Wg0Gt3ymQy0Sus75jhiliwK5fKbl7j4gdPlMz++d3B54eUnPcdJ72a+gDn/f9YBpG8J5IfIAAAAASUVORK5CYII='
        // TODO переделать с использованием handlebars
        const {text, title, subtitle, author, imageUrl, videoUrl, date, likes, dislikes, comments} = this.postModel;

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
        videoLink.href = videoUrl;
        const imageLink = document.createElement('img');
        imageLink.classList.add('image-link');
        imageLink.src = imageUrl;
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
        const likesButton = document.createElement('button');
        likesButton.classList.add('likes-button')
        const likesImg = document.createElement('img');
        likesImg.classList.add('like-img');
        likesImg.src = likeUrl;
        likesButton.append(likesImg);
        const likesCount = document.createElement('a');
        likesCount.classList.add('likes-count');
        likesCount.textContent = likes;
        likesBlock.append(likesButton, likesCount);
        const dislikesBlock = document.createElement('div');
        dislikesBlock.classList.add('dislikes-block');
        const dislikesButton = document.createElement('button');
        dislikesButton.classList.add('dislikes-button')
        const dislikesImg = document.createElement('img');
        dislikesImg.classList.add('dislike-img');
        dislikesImg.src = dislikeUrl;
        dislikesButton.append(dislikesImg);
        const dislikesCount = document.createElement('a');
        dislikesCount.classList.add('dislikes-count');
        dislikesCount.textContent = dislikes;
        dislikesBlock.append(dislikesButton, dislikesCount);
        const commentsBlock = document.createElement('div');
        commentsBlock.classList.add('comments-block');
        const commentsButton = document.createElement('button');
        commentsButton.classList.add('comments-button');
        const commentsImg = document.createElement('img');
        commentsImg.classList.add('comments-img');
        commentsImg.src = commentUrl;
        commentsButton.append(commentsImg);

        const commentsCount = document.createElement('a');
        commentsCount.classList.add('comments-count');
        commentsCount.textContent = comments;
        commentsBlock.append(commentsButton, commentsCount);
        ratingContent.append(likesBlock, dislikesBlock, commentsBlock);

        post.append(header, mainText, content, ratingContent);
        this.parent.appendChild(post);
    }
}
