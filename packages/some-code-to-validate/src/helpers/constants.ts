export const TAKE = 10
export const APP_CONTAINER_CLASS = 'app-container'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`
export const MAX_WIDTH_CONTENT = 600
export const COUNTDOWN_CODE_SEND_INTERVAL = 30
export const HALF_MAX_WIDTH_CONTENT = MAX_WIDTH_CONTENT / 2

export const ITEM_SWIPE_THRESHOLD = 50
export const DEFAULT_SLIDER_SWIPE_THRESHOLD = 10000
export const FEED_SWIPE_THRESHOLD = 10000

export const START_HISTORY_LENGTH = 2

export const MAX_NUMBER = 2147483647
export const HEADER_EVENT_KEY_FOR_CHAT = 'getHistory'
export const TIMEOUT_FOR_CHAT_STABLE_CONNECTION = 30000

export const RESPONSE_TIMEOUT = 500
export const ACTION_TIMEOUT = 2500

export const FINGER_UP_QUERY_KEY = 'fingerUp'
export const QUICK_ACTIONS_NAVIGATOR_QUERY_KEY = 'quickActionsNavigator'
export const QUICK_ACTIONS_FEED_QUERY_KEY = 'quickActionsFeed'
export const SAVED_SEARCHES_KEY = 'savedSearches'

//navigator
export const NAVIGATOR_RESERVED_LINKS = {
	ABOUT_SEARCH_LINK:
		'https://www.youtube.com/watch?v=dLVx-Hk54_Q&feature=youtu.be',
	ABOUT_VMESTE_LINK: 'https://vmeste.ru/about/',
}

// Использовать как донор для связок Enum + Dictionary
export class constants {
	static test = {
		owner: 1,
		user: 2,
	}

	static links = {
		main: 'https://vmeste.ru',
		company: 'https://uorg.vmeste.ru',
		admin: 'https://adminoss.vmeste.ru',
	}

	static OwnerContentAccessRights = {
		Denied: 1,
		ReadOnly: 2,
		FullAccessExceptVotings: 3,
		FullAccess: 4,
	}

	static POLL_STATUSES = {
		ON_MODERATION: 1,
		APPROVED: 2,
		RETURNED: 3,
		SIMPLE_POLL: 4,
		VOTING_ON_ACTIVATION: 5,
		VOTING_ACTIVE: 6,
		VOTING_FINISHED: 7,
		ARCHIVED: 8,
		DRAFTED: 9,
		DELETED: 10,
		POLL_ACTIVE: 11,
		POLL_FINISHED: 12,
	}

	static POLL_STATUSES_ALLOWED_TO_OPEN_IN_CHAT = [
		constants.POLL_STATUSES.APPROVED,
		constants.POLL_STATUSES.SIMPLE_POLL,
		constants.POLL_STATUSES.VOTING_ON_ACTIVATION,
		constants.POLL_STATUSES.VOTING_ACTIVE,
		constants.POLL_STATUSES.VOTING_FINISHED,
		constants.POLL_STATUSES.POLL_ACTIVE,
		constants.POLL_STATUSES.POLL_FINISHED,
	]

	static POLL_STATUSES_ALLOWED_TO_VOTE = [
		constants.POLL_STATUSES.APPROVED,
		constants.POLL_STATUSES.RETURNED,
		constants.POLL_STATUSES.SIMPLE_POLL,
		constants.POLL_STATUSES.VOTING_ON_ACTIVATION,
		constants.POLL_STATUSES.VOTING_ACTIVE,
		constants.POLL_STATUSES.POLL_ACTIVE,
	]

	static OwnerTypeId = {
		Owner: 1,
		Roomate: 2,
		Tenant: 3,
	}

	static EntityType = {
		News: 1,
		Polls: 2,
		Votes: 3,
		Chat: 4,
	}

	static firsLoadCommunitiesCount = 5

	static RegistrationErrorCode = {
		None: 0,
		IncorrectMobilePhoneNumber: 1,
		NameIsRequired: 2,
		IncorrectName: 3,
		NameHasInvalidLength: 4,
		SurnameIsRequired: 5,
		IncorrectSurname: 6,
		SurnameHasInvalidLength: 7,
		IncorrectPatronymic: 8,
		PatronymicHasInvalidLength: 9,
		PasswordIsRequired: 10,
		PasswordHasInvalidLength: 11,
		ConfirmPasswordIsRequired: 12,
		ThePasswordAndConfirmationPasswordDoNotMatch: 13,
		UserAlreadyExists: 14,
		PhoneConfirmError: 15,
		UserCreatingError: 16,
	}

	static RegisterOnInviteErrorCode = {
		None: 0,
		IncorrectMobilePhoneNumber: 1,
		NameIsRequired: 2,
		IncorrectName: 3,
		NameHasInvalidLength: 4,
		SurnameIsRequired: 5,
		IncorrectSurname: 6,
		SurnameHasInvalidLength: 7,
		IncorrectPatronymic: 8,
		PatronymicHasInvalidLength: 9,
		GenderNotSpecified: 10,
		PasswordIsRequired: 11,
		PasswordHasInvalidLength: 12,
		ConfirmPasswordIsRequired: 13,
		ThePasswordAndConfirmationPasswordDoNotMatch: 14,
		IncorrectInviteCode: 15,
		ConfirmCodeIsRequired: 16,
	}

	static LocationIdWithUserTypeErrorCode = {
		None: 0,
		IncorrectLocationId: 1,
		IncorrectMobilePhoneNumber: 2,
		SurnameIsRequired: 3,
		IncorrectSurname: 4,
		SurnameHasInvalidLength: 5,
		IncorrectOwnerRelationships: 6,
		IncorrectLeaseDate: 7,
	}

	static LocationIdWithUserTypeConflictErrorCode = {
		None: 0,
		RealEstateExist: 1,
		LocationIdAndFlanAlreadyExist: 2,
		TenantUserNotExist: 3,
		CreatingResidentClaimForUserError: 4,
		AddingToYourself: 5,
		OwnerUserContainsTargetOwnerButDoesNotHaveOwnerRights: 6,
	}

	static AddingTenantErrorCode = {
		None: 0,
		IncorrectMobilePhoneNumber: 1,
		NameIsRequired: 2,
		IncorrectName: 3,
		NameHasInvalidLength: 4,
		SurnameIsRequired: 5,
		IncorrectSurname: 6,
		SurnameHasInvalidLength: 7,
		IncorrectPatronymic: 8,
		PatronymicHasInvalidLength: 9,
		IncorrectAddress: 10,
		RequiredLastDate: 11,
		RequiredTenantUser: 12,
		RequiredOwnerRelationships: 13,
	}

	static AddingTenantConflictErrorCode = {
		None: 0,
		TenantUserNotFound: 1,
		LocationIdNotFound: 2,
		OwnersNotFound: 3,
		TargetOwnerNotFound: 4,
		TenantOwnersContainsTargetLocation: 5,
		CreateResidentClaimError: 6,
		ExistAccessRequestForUser: 7,
		AddingToYourself: 8,
	}

	static ChangeUserPasswordErrorCode = {
		None: 0,
		OldPasswordPasswordIsRequired: 1,
		OldPasswordPasswordHasInvalidLength: 2,
		NewPasswordPasswordIsRequired: 3,
		NewPasswordPasswordHasInvalidLength: 4,
		ConfirmPasswordIsRequired: 5,
		TheNewPasswordAndConfirmationNewPasswordDoNotMatch: 6,
	}

	static RoommateTypeList = [
		{
			id: 1,
			value: 'Супруг(а)',
			maleValue: 'Супруг',
			femaleValue: 'Супруга',
		},
		{
			id: 2,
			value: 'Мать',
		},
		{
			id: 3,
			value: 'Отец',
		},
		{
			id: 4,
			value: 'Сестра',
		},
		{
			id: 5,
			value: 'Брат',
		},
		{
			id: 6,
			value: 'Дочь',
		},
		{
			id: 7,
			value: 'Сын',
		},
		{
			id: 8,
			value: 'Бабушка',
		},
		{
			id: 9,
			value: 'Дедушка',
		},
		{
			id: 10,
			value: 'Внук',
		},
		{
			id: 11,
			value: 'Внучка',
		},
		{
			id: 12,
			value: 'Тётя',
		},
		{
			id: 13,
			value: 'Дядя',
		},
		{
			id: 14,
			value: 'Племянница',
		},
		{
			id: 15,
			value: 'Племянник',
		},
		{
			id: 16,
			value: 'Невестка',
		},
		{
			id: 17,
			value: 'Зять',
		},
		{
			id: 18,
			value: 'Родственник',
		},
		{
			id: 19,
			value: 'Друг',
		},
		{
			id: 20,
			value: 'Подруга',
		},
		{
			id: 21,
			value: 'Знакомый',
			femaleValue: 'Знакомая',
		},
	]

	static InvertedRoommateTypeList = [
		{
			id: 1,
			value: 'Супруг(а)',
			maleValue: 'Супруг',
			femaleValue: 'Супруга',
		},
		{
			id: 2,
			maleValue: 'Сын',
			femaleValue: 'Дочь',
		},
		{
			id: 3,
			maleValue: 'Сын',
			femaleValue: 'Дочь',
		},
		{
			id: 4,
			maleValue: 'Брат',
			femaleValue: 'Cecтра',
		},
		{
			id: 5,
			maleValue: 'Брат',
			femaleValue: 'Cecтра',
		},
		{
			id: 6,
			maleValue: 'Отец',
			femaleValue: 'Мать',
		},
		{
			id: 7,
			maleValue: 'Отец',
			femaleValue: 'Мать',
		},
		{
			id: 8,
			maleValue: 'Внук',
			femaleValue: 'Внучка',
		},
		{
			id: 9,
			maleValue: 'Внук',
			femaleValue: 'Внучка',
		},
		{
			id: 10,
			maleValue: 'Дедушка',
			femaleValue: 'Бабушка',
		},
		{
			id: 11,
			maleValue: 'Дедушка',
			femaleValue: 'Бабушка',
		},
		{
			id: 12,
			maleValue: 'Племянник',
			femaleValue: 'Племянница',
		},
		{
			id: 13,
			maleValue: 'Племянник',
			femaleValue: 'Племянница',
		},
		{
			id: 14,
			maleValue: 'Дядя',
			femaleValue: 'Тетя',
		},
		{
			id: 15,
			maleValue: 'Дядя',
			femaleValue: 'Тетя',
		},
		{
			id: 16,
			maleValue: 'Свекор',
			femaleValue: 'Свекровь',
		},
		{
			id: 17,
			maleValue: 'Тесть',
			femaleValue: 'Теща',
		},
		{
			id: 18,
			maleValue: 'Родственник',
			femaleValue: 'Родственник',
		},
		{
			id: 19,
			maleValue: 'Друг',
			femaleValue: 'Подруга',
		},
		{
			id: 20,
			maleValue: 'Друг',
			femaleValue: 'Подруга',
		},
		{
			id: 21,
			maleValue: 'Знакомый',
			femaleValue: 'Знакомая',
		},
	]

	static supportTypes = [
		{
			supportType: 2,
			value: 'Нет доступа к сервису',
		},
		{
			supportType: 3,
			value: 'Нет доступа к недвижимости',
		},
		{
			supportType: 4,
			value: 'Неправильная информация',
		},
		{
			supportType: 5,
			value: 'Спам',
		},
		{
			supportType: 6,
			value: 'Ошибка в адресе',
		},
		{
			supportType: 7,
			value: 'Предложения',
		},
		{
			supportType: 8,
			value: 'Другое',
		},
	]

	static RegistrationStatuses = {
		Initialized: 1,
		AdditionalInfoOwner: 2,
		AdditionalInfoRoomate: 3,
		AdditionalInfoTenant: 4,
		PassportOnConfirmation: 5,
		PassportDeclined: 6,
		OwnerDeclined: 7,
		WaitingForOwnerApprove: 8,
		WaitingForOwnerJoin: 9,
		Finalized: 10,
		Archived: 11,
		Blocked: 12,
		FinalizedWithFullAccess: 13,
	}

	static RegistrationStage = {
		Initialized: 1,
		IncompleteRegistration: 2,
		Registered: 3,
		PassportOnConfirmation: 4,
		PassportDeclined: 5,
		Finalized: 6,
		Archived: 7,
		Blocked: 8,
	}

	static EstateStatuses = {
		OnRosReestrModeration: 1,
		WaitingForOwnerApprove: 2,
		ConfirmNotConfirmedOwner: 3,
		AgreementEGRNNotCreated: 4,
		ConfirmOwner: 5,
		RosReestrConfirm: 6,
		OwnerDeclined: 7,
		RosReestrDecline: 8,
		OwnerDeclinedFromOwnerUser: 9,
		Finalized: 10,
		Archived: 11,
		Blocked: 12,
		CreatingRequestToRosReestr: 13,
		TenantDecline: 14,
		SystemDecline: 15,
	}

	static EstateRejectionReasons = {
		FullNameIsNotMatched: 1,
		NoRightholderData: 2,
	}

	static RosReestrProxyErrors = {
		CadasterNumberNotFound: 1,
		MayBeFlatNumberOutOfBounds: 2,
		TechincalReason: 3,
	}

	static AccessRequestStatusType = {
		AwaitingConfirmation: 0,
		Confirmed: 1,
		Rejected: 2,
		SendedOwner: 3,
		ConfirmedTenant: 4,
		RejectedTenant: 5,
		UserRegistered: 6,
		Blocked: 7,
		Deleted: 8,
		Revoked: 9,
		ConfirmedOtherOwner: 10,
		SystemDecline: 11,
		CreatedInvite: 12,
	}

	static UserType = {
		Owner: 0,
		CompanyUser: 1,
		GlobalUser: 3,
	}

	static UserProfileType = {
		CompanyUser: 1,
		User: 3,
	}

	static PassportStatus = {
		None: 0,
		OnModeration: 1,
		NeedConfirm: 2,
		Confirmed: 3,
		Rejected: 4,
		NoNeed: 5,
		ConfirmedEsia: 6,
	}

	static CommunityGroupTypes = {
		all: 0,
		participate: 1,
		administration: 2,
	}

	static CommunityDocumentTypes = [
		{
			type: 0,
			value: 'Не выбрано',
		},
		{
			type: 1,
			value: 'План домов',
		},
		{
			type: 2,
			value: 'Устав',
		},
		{
			type: 3,
			value: 'Контакты',
		},
		{
			type: 4,
			value: 'Отчеты',
		},
		{
			type: 5,
			value: 'Иные',
		},
	]

	static communityTypes = [
		{
			type: 4,
			value: 'Этаж',
		},
		{
			type: 0,
			value: 'Подъезд',
		},
		{
			type: 5,
			value: 'Дом',
		},
		{
			type: 6,
			value: 'Жилой  комплекс',
		},
		{
			type: 7,
			value: 'Квартал',
		},
		{
			type: 8,
			value: 'Микрорайон',
		},
		{
			type: 3,
			value: 'Район',
		},
		{
			type: 9,
			value: 'Город',
		},
		{
			type: 10,
			value: 'Населённый пункт',
		},
		{
			type: 11,
			value: 'Садовое товарищество',
		},
		{
			type: 12,
			value: 'Огородное товарищество',
		},
		{
			type: 13,
			value: 'Посёлок',
		},
		{
			type: 1,
			value: 'Деревня',
		},
		{
			type: 2,
			value: 'Село',
		},
		{
			type: 14,
			value: 'Сообщество',
		},
	]

	static ConnectionState = {
		Connecting: 0,
		Connected: 1,
		Reconnecting: 2,
		Disconnected: 4,
	}

	static RelationToCommunity = {
		None: 0,
		Resident: 1,
		Admin: 2,
	}

	static FeedTypes = {
		all: null,
		news: 0,
		events: 1,
		advices: 2,
		warnings: 3,
	}

	static ChatObjectTypesId = {
		News: 1,
		Poll: 2,
		Voting: 3,
		Conversation: 4,
		Community: 5,
		Order: 6,
	}

	static DATE_FORMAT = 'DD.MM.YYYY HH:mm:ss'
}
