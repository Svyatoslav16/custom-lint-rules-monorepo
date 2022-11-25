import { UserType } from "@type/enums";

export const PARAM_NAMES = {
  COMMUNITY_ID: "communityId",
  USER_ID: "userId",
  USER_TYPE: "userType",
  POST_ID: "shareHash",
  CHAT_GUID: "chatGuid",
  CONTENT_TYPE_ID: "contentTypeId",
} as const;

export const ROUTES = {
  FINGER_UP_BY_TYPE: `finger-up/:${PARAM_NAMES.CONTENT_TYPE_ID}`,
  PROFILE_USER: `${UserType.User}/:${PARAM_NAMES.USER_ID}`,
  PROFILE_NEIGHBOR: `${UserType.User}/:${PARAM_NAMES.USER_ID}/:${PARAM_NAMES.COMMUNITY_ID}`,
  PROFILE_MC_EMPLOYEE: `${UserType.CompanyUser}/:${PARAM_NAMES.USER_ID}`,
  PROFILE_WHAT_UNITES_US: "what-unites-us",
  PROFILE_CONTACTS: `contacts`,
  PROFILE_EDIT: "person",
  PROFILE_POSTS: "posts",
  COMMUNITY_DETAIL: `:${PARAM_NAMES.COMMUNITY_ID}`,
  ADD_REAL_ESTATE: "addrealestate",
  POST_DETAIL: `:${PARAM_NAMES.POST_ID}`,
  BLOCKED_USERS: "blocked-users",
  CHAT_DETAIL: `:${PARAM_NAMES.CHAT_GUID}`,
  CHAT_LIST: "list",
};

class PAGES {
  static ROOT = "/";

  static LOGIN = "/login";

  static ONBOARDING = `${this.LOGIN}/onboarding`;

  static MAIN_SITE = "/mainsite";

  static MAINSITE = "/mainsite";

  static PAGE_NOT_FOUND = `${this.MAINSITE}/404`;

  static ADD_REAL_ESTATE = `${this.LOGIN}/${ROUTES.ADD_REAL_ESTATE}`;

  static PROFILE = `${this.MAIN_SITE}/profile`;

  static NAVIGATOR = `${this.MAIN_SITE}/navigator`;

  static PROFILE_USER = `${this.PROFILE}/${ROUTES.PROFILE_USER}`;

  static PROFILE_USER_FEED = `${this.PROFILE_USER}/${ROUTES.PROFILE_POSTS}`;

  static PROFILE_NEIGHBOR = `${this.PROFILE}/${ROUTES.PROFILE_NEIGHBOR}`;

  static PROFILE_NEIGHBOR_FEED = `${this.PROFILE_NEIGHBOR}/${ROUTES.PROFILE_POSTS}`;

  static PROFILE_MC_EMPLOYEE = `${this.PROFILE}/${ROUTES.PROFILE_MC_EMPLOYEE}`;

  static PROFILE_WHAT_UNITES_US = `${this.PROFILE_USER}/${ROUTES.PROFILE_WHAT_UNITES_US}`;

  static PROFILE_CONTACTS = `${this.PROFILE}/${ROUTES.PROFILE_CONTACTS}`;

  static PROFILE_FEED = `${this.PROFILE}/${ROUTES.PROFILE_POSTS}`;

  static COMMUNITIES = `${this.MAIN_SITE}/communities`;

  static COMMUNITY_CREATE = `${this.COMMUNITIES}/create/profile`;

  static COMMUNITY_SETTINGS = `${this.COMMUNITIES}/settings/${ROUTES.COMMUNITY_DETAIL}/profile`;

  static COMMUNITY_BORDERS = `${this.COMMUNITIES}/${ROUTES.COMMUNITY_DETAIL}/borders`;

  static COMMUNITY_INVITE = `${this.COMMUNITIES}/${ROUTES.COMMUNITY_DETAIL}/invite`;

  static COMMUNITY_DETAIL = `${this.COMMUNITIES}/${ROUTES.COMMUNITY_DETAIL}`;

  static CARDS = `${this.MAIN_SITE}/cards`;

  static SETTINGS = `${this.MAIN_SITE}/settings`;

  static PROFILE_EDIT = `${this.SETTINGS}/${ROUTES.PROFILE_EDIT}`;

  static POST_DETAIL = `${this.MAIN_SITE}/${ROUTES.POST_DETAIL}`;

  static POLL_DETAIL = `${this.MAIN_SITE}/poll/${ROUTES.POST_DETAIL}`;

  static CHAT = `${this.MAIN_SITE}/chat`;

  static CHAT_DETAIL = `${this.CHAT}/${ROUTES.CHAT_DETAIL}`;

  static FINGER_UP = `${this.MAIN_SITE}/${ROUTES.FINGER_UP_BY_TYPE}`;

  static INVITE = `${this.MAIN_SITE}/invite`;

  // TODO: заменить на generatePath react-router-dom
  static getPathWithParams = (path: string, params: unknown[]) =>
    `${path
      .split("/")
      .filter((p) => p[0] !== ":")
      .join("/")}/${params.join("/")}`;
}

export default PAGES;
