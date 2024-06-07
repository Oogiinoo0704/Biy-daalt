const commentsSection = document.getElementById('comments-section');

async function fetchComments(url) {
    try {
        const response = await fetch(url);
        const comments = await response.json();

        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            
            const usernameDiv = document.createElement('div');
            usernameDiv.classList.add('username');
            usernameDiv.textContent = comment.username;
            
            const textDiv = document.createElement('div');
            textDiv.classList.add('text');
            textDiv.textContent = comment.text;
            
            const createdAtDiv = document.createElement('div');
            createdAtDiv.classList.add('created_at');
            createdAtDiv.textContent = comment.created_at;
            
            commentDiv.appendChild(usernameDiv);
            commentDiv.appendChild(textDiv);
            commentDiv.appendChild(createdAtDiv);
            
            commentsSection.appendChild(commentDiv);
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

fetchComments('http://localhost:8085/api/comments');