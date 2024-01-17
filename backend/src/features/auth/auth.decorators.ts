import { createParamDecorator } from "routing-controllers";
import { getAuthToken, verifyAndDecodeToken } from "./functions";

export function UserFromToken() {
  return createParamDecorator({
    value: (action) =>
      verifyAndDecodeToken(getAuthToken(action.request)).then((token) =>
        token ? { id: token.userId } : undefined
      ),
  });
}

export function ConsumerFromToken() {
  return createParamDecorator({
    value: (action) =>
      verifyAndDecodeToken(getAuthToken(action.request)).then((token) =>
        token && token.consumerId ? { id: token.consumerId } : undefined
      ),
  });
}

export function VendorFromToken() {
  return createParamDecorator({
    value: (action) =>
      verifyAndDecodeToken(getAuthToken(action.request)).then((token) =>
        token && token.vendorId ? { id: token.vendorId } : undefined
      ),
  });
}
