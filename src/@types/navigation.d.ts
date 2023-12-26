import {
  OrderNavigationProps,
  ProductNavigationProps
} from '@shared/types/navigation';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      product: ProductNavigationProps;
      order: OrderNavigationProps;
      orders: undefined;
    }
  }
}
