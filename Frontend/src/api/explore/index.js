import axios from 'axios';

const apiUrl = 'http://localhost:8080';

class ExploreApi {
  getListTopic() {
    return axios.get(`${apiUrl}/topics`);
    //return Promise.resolve(deepCopy(forums));
  }

  createCourse(request) {
    return axios.post(`${apiUrl}/courses`, request)
  }

  createLesson(request) {
    return axios.post(`${apiUrl}/lessons`, request)
  }

  detailCourse(id) {
    return axios.get(`${apiUrl}/courses/${id}`);
  }

  getLesson(id) {
    return axios.get(`${apiUrl}/lessons/${id}`);
  }
//   getForumDetail(id) {
//     return axios.get(`${apiUrl}/${id}`);
//     //return Promise.resolve(deepCopy(forumDetail));
//   }

//   getSimilarForumS(request) {
//     return axios.post(`${apiUrl}/similarForums`, request)
//   }

//   postForum(request) {
//     return axios.post(apiUrl, request)
//   }

//   getComments(id) {
//     return axios.get(`${apiUrl}/${id}/comment`);
//   }

//   postComment(request) {
//     return axios.post(`${apiUrl}/comment`, request)
//   }
}

export const exploreApi = new ExploreApi();