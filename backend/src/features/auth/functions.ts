import { AUTH_CONFIG } from "@/app-config";
import { TokenData } from "./types";
import { verify } from "jsonwebtoken";

export const getAuthToken = (req): string | null => {
  const cookie = req.cookies["Authorization"];
  if (cookie) return cookie;

  const header = req.header("Authorization");
  if (header) return header.split("Bearer ")[1];

  return null;
};

/**
 * Verify and decode token
 * @returns Decoded token or void if invalid
 */
export const verifyAndDecodeToken = async (
  token: string
): Promise<TokenData | void> => {
  try {
    const decoded = (await verify(token, AUTH_CONFIG.jwtSecret)) as TokenData;
    return decoded;
  } catch (error) {
    return;
  }
};
