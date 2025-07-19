// User storage
export function getUserFromStorage() {
  return JSON.parse(localStorage.getItem('currentUser'));
}

export function setUserToStorage(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

export function removeUserFromStorage() {
  localStorage.removeItem('currentUser');
}

// Users list
export function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

export function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

// Posts
export function getPosts() {
  return JSON.parse(localStorage.getItem('posts') || '[]');
}

export function savePost(post) {
  const posts = getPosts();
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
}

export function updatePost(updatedPost) {
  const posts = getPosts().map(post =>
    post.id === updatedPost.id ? updatedPost : post
  );
  localStorage.setItem('posts', JSON.stringify(posts));
}

export function deletePost(id) {
  const posts = getPosts().filter(post => post.id !== id);
  localStorage.setItem('posts', JSON.stringify(posts));
} 