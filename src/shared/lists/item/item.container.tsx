// import React, { useEffect, lazy, Suspense } from 'react';
//
// import { AppStateInterface } from '@rdx/root.reducer';
// import { ErrorStateInterface } from '@error/error.reducer';
//
// import { connect } from 'react-redux';
// import { clearErrorAction } from '@error/error.action';
// import { fetchListItemAction } from './item.action';
//
// import { ItemLoadingComponent } from './item.loading';
// const ItemComponent = lazy(() => import('./item.lazy'));
//
// interface ItemContainerInterface {
//   id: string;
//   containerName: string;
//   errors: ErrorStateInterface;
//   clearErrorAction: Function;
//   fetchListItemAction: Function;
//   cancelListItemAction: Function;
// }
//
// const Item = ({
//   id,
//   containerName,
//   errors,
//   clearErrorAction,
//   fetchListItemAction,
//   cancelListItemAction,
// }: ItemContainerInterface) => {
//   useEffect(() => {
//     clearErrorAction(containerName);
//   }, [containerName]);
//
//   if (errors[containerName] !== undefined) {
//     throw new Error();
//   }
//   return (
//     <Suspense fallback={<ItemLoadingComponent />}>
//       <ItemComponent />
//     </Suspense>
//   );
// };
//
// const mapStateToProps = (state: AppStateInterface) => ({
//   errors: state.error,
// });
//
// const mapDispatchToProps = {
//   clearErrorAction: clearErrorAction.trigger,
//   fetchListItemAction: fetchListItemAction.request,
//
// };
//
// export const ItemContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Item);
