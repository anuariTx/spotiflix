import { PostType } from '@shared/types/post.type';
import { AxiosService } from '@services/axios/axios.service';
import { takeLatest, put, call } from 'redux-saga/effects';
import { setPostsAction } from '@rdx/actions/posts.action';

function* fetchPostService() {
  const postService = new AxiosService('https://jsonplaceholder.typicode.com/');
  const { data }: any = yield postService.get({ endpoint: 'posts' });

  return data;
}

function* fetchPostRequest() {
  try {
    const data = yield call(fetchPostService);
    let payload = {};

    data.slice(0, 10).forEach(({ id, title }: PostType) => {
      payload = { ...payload, [id]: { id, title } };
    });

    yield put(
      setPostsAction.success({
        ...payload,
      }),
    );
  } catch (error) {
    yield put(
      setPostsAction.failure({
        title: 'Error when signing in.',
        message: 'Ops',
      }),
    );
  }
}

export function* fetchPostsSaga() {
  yield takeLatest(setPostsAction.REQUEST, fetchPostRequest);
}
