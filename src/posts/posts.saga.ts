import { PostType } from '@shared/types/post.type';
import { AxiosService } from '@services/axios/axios.service';
import { takeLatest, put, call } from 'redux-saga/effects';
import { setPostsAction } from 'posts/posts.action';
import { setErrorAction } from 'error/error.action';

let postService: any;

function* fetchPostService() {
  postService = new AxiosService('https://jsonplaceholder.typicode.com/');
  const { data }: any = yield postService.get({ endpoint: 'posts' });

  return data;
}

function* cancelFetchService(params: any) {
  yield postService.cancelRequest(params.payload);
}

function* fetchPostRequest(params: any) {
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
    if (!error.wasCancelled) {
      const errorPayload = { title: 'Error when fetching posts.', message: 'Oops' };
      yield put(setPostsAction.failure(errorPayload));
      yield put(
        setErrorAction.fulfill({
          containerName: params.payload,
          ...errorPayload,
        }),
      );
    }
  }
}

export function* fetchPostsSaga() {
  yield takeLatest(setPostsAction.REQUEST, fetchPostRequest);
  yield takeLatest(setPostsAction.FULFILL, cancelFetchService);
}
