/* eslint-disable */

const Mock = require("mockjs");

const ep_apiincentive = {};
const ep_modelincentive = {};
const ep_incentive = {};
const base = {};
const ep_service_common = {};
const ep_modeluser = {};
const ep_modelcommon = {};
const ep_user = {};
const toutiao_passport_common_interface = {};
const toutiao_passport_cancel_check = {};
const ep_messageuser = {};
const ep_growscore = {};
const ep_logistics_receiver = {};
const ep_userthirdparty = {};
const toutiao_passport_gobiz = {};
const account_base = {};
const ep_goods_common = {};
const ep_modellesson = {};
const ep_modelcourse = {};
const ep_rating_common = {};
const ep_trade_stock = {};
const toutiao_trade_tcc_transaction = {};
const ep_modelrating = {};

ep_apiincentive.BulletScene = {
  ActivityPage: 1,
  PunchCardPage: 2,
  RankPage: 3,
};

ep_apiincentive.MedalInfoFilterType = {
  SpecialMedal: 1,
  NormalMedal: 2,
  Challengeable: 3,
};

ep_incentive.IncentiveType = {
  PunchCard: 1,
};

ep_incentive.IncentiveStatus = {
  Default: 0,
  Init: 1,
  Process: 2,
  Success: 3,
  Fail: 4,
};

ep_incentive.PunchCardUserAction = {
  StartPunchCard: 1,
  ContinuePunchCard: 2,
  GetMedal: 3,
  PunchCardFail: 4,
};

ep_incentive.MedalType = {
  SevenDays10minPerDay: 1,
  SevenDays15minPerDay: 2,
  SevenDays20minPerDay: 3,
  FourteenDays10minPerDay: 11,
  FourteenDays15minPerDay: 12,
  FourteenDays20minPerDay: 13,
  TwentyOneDays10minPerDay: 21,
  TwentyOneDays15minPerDay: 22,
  TwentyOneDays20minPerDay: 23,
  NormalMedal2021August: 108,
  NormalMedal2021September: 109,
  NormalMedal2021October: 110,
  NormalMedal2021November: 111,
  NormalMedal2021December: 112,
};

ep_incentive.WeekLevelType = {
  FirstWeek: 1,
  SecondWeek: 2,
  ThirdWeek: 3,
};

ep_incentive.PunchCardRankType = {
  Today: 1,
  SevenDays: 2,
};

ep_incentive.NotificationType = {
  Push: 1,
  Wechat: 2,
};

ep_incentive.TaskType = {
  Lesson: 1,
  Material: 2,
  Paper: 3,
  IM: 4,
  App: 5,
  DIY: 6,
};

ep_incentive.TaskApp = {
  Douyin: 1,
  JianYing: 2,
  Xingtu: 3,
};

ep_service_common.AppID = {
  Student: 2989,
  StudentWeb: 3801,
  StudentPC: 4783,
  Teacher: 3280,
  TeacherMobile: 5319,
  Organization: 5368,
};

ep_service_common.DeviceEnum = {
  Student: 1,
  AwemeH5: 2,
  StudentPC: 3,
};

ep_service_common.UserRole = {
  Student: 1,
  Teacher: 2,
  Admin: 3,
  Owner: 4,
};

ep_service_common.PushOfficial = {
  On: 0,
  Off: 1,
};

ep_service_common.PushSocial = {
  On: 0,
  Partial: 1,
  Off: 2,
};

ep_service_common.PushPreview = {
  On: 0,
  Off: 1,
};

ep_service_common.ConversationAttention = {
  On: 0,
  Off: 1,
};

ep_service_common.ConversationMute = {
  On: 0,
  Off: 1,
};

ep_service_common.FirstSubjectType = {
  UnKnown: 0,
  K12: 1001,
  PreK: 1002,
  Exam: 1003,
  Skill: 1004,
  Overseas: 1005,
  Interest: 1006,
  Language: 1007,
  Intelligence: 1008,
};

ep_service_common.SubjectType = {
  Chinese: 1,
  Maths: 2,
  English: 3,
  Physical: 4,
  Chemistry: 5,
  History: 6,
  Geography: 7,
  Biological: 8,
  Politics: 9,
  HumanitiesScience: 10,
  PhysicsScience: 11,
  HistoryAndSociety: 12,
  Science: 13,
  PoliticsAndMorality: 14,
  MathematicalThinking: 15,
  Technology: 16,
  Sinology: 17,
  MoralityAndLaw: 18,
  Other: 19,
  VocationalEducation: 20,
  AbroadEducation: 21,
  QualityEducation: 22,
  HomeEducation: 23,
  GraduateEducation: 24,
  PhysicalAndMentalQuality: 25,
  Programming: 26,
  Lecture: 27,
  LanguageJapanese: 28,
  LanguageGerman: 29,
  ExamAcademic: 30,
  ExamPublicOffices: 31,
  CultureAndArt: 32,
  LanguageKorean: 33,
  PreEducation: 34,
  PreInterest: 35,
  PreEnlightenment: 36,
  ParentEducation: 37,
  RobotEducation: 38,
  SkillKnowledgePayment: 39,
  SkillCook: 40,
  SkillManage: 41,
  SkillOffice: 42,
  SkillDesign: 43,
  SkillProductOperation: 44,
  SkillIt: 45,
  SkillOther: 46,
  SkillDriving: 47,
  SkillHr: 48,
  OverseasApply: 49,
  OverseasCoach: 50,
  OverseasImprove: 51,
  OverseasInternship: 52,
  OverseasOther: 53,
  InterestSport: 54,
  InterestAct: 55,
  InterestDance: 56,
  InterestCamera: 57,
  InterestPersonalAppearance: 58,
  InterestMusic: 59,
  InterestArt: 60,
  InterestFitness: 61,
  InterestCook: 62,
  InterestLifeSkills: 63,
  ExamTeaching: 64,
  ExamJudiciary: 65,
  ExamTeacherCertification: 66,
  ExamPostgraduate: 67,
  ExamOther: 68,
  ExamIt: 69,
  ExamArchitecture: 70,
  LanguageTeaching: 71,
  LanguageDigital: 72,
  LanguageChinese: 73,
  LanguageSpanish: 74,
  LanguageFrench: 75,
  LanguageOther: 76,
  LanguageEnglishInland: 77,
  LanguageEnglishBusiness: 78,
  LanguageEnglishOutland: 79,
  LanguageEnglishSpoken: 80,
  LanguageEnglishOther: 81,
  LanguagePortuguese: 82,
  LanguageRussian: 83,
};

ep_service_common.PressType = {
  RenJiao: 1,
  ZheJiao: 2,
  ZheKe: 3,
  HuJiao: 4,
  SuJiao: 5,
  BeiShiDa: 6,
  LuKe: 7,
  HuaShiDa: 8,
  BuBianBen: 9,
  WaiYan: 10,
  RenAi: 11,
  NiuJinShenZhen: 12,
  CommonVersion: 13,
};

ep_service_common.GradeType = {
  G1: 1,
  G2: 2,
  G3: 3,
  G4: 4,
  G5: 5,
  G6: 6,
  G7: 7,
  G8: 8,
  G9: 9,
  G10: 10,
  G11: 11,
  G12: 12,
  AllGrade: 300,
  G400: 400,
  G500: 500,
};

ep_service_common.SourceStatus = {
  Pending: 1,
  Pass: 3,
  Drop: 4,
};

ep_service_common.AdminStatus = {
  Pass: 3,
  Drop: 4,
};

ep_service_common.EntityType = {
  Course: 1,
  Lesson: 2,
  User: 3,
  Rating: 4,
  Material: 5,
  VideoLesson: 6,
};

ep_service_common.OperationType = {
  Add: 1,
  Update: 2,
};

ep_service_common.CourseScale = {
  Unknown: 0,
  Small: 1,
  Big: 2,
};

ep_service_common.ClassCapacity = {
  Small: 30,
  Big: 10000,
};

ep_service_common.OffShelfType = {
  None: 0,
  OffShelfBeforeStart: 1,
};

ep_service_common.ReplayType = {
  Unknown: 0,
  NotSupport: 1,
  NormalReplay: 2,
};

ep_service_common.RefundType = {
  Unknown: 0,
  BeforeStart24h: 1,
  NotSupport: 2,
  BeforeFinished: 4,
  NotLearnIn7Days: 5,
};

ep_service_common.CourseTrialType = {
  Unknown: 0,
  Disable: 1,
  Normal: 2,
};

ep_service_common.CourseExecStatus = {
  UnStart: 1,
  Executing: 2,
  Finished: 3,
};

ep_service_common.CourseCommodityStatus = {
  New: 1,
  OffShelf: 2,
  OnSale: 3,
  OffSale: 4,
};

ep_service_common.CourseUserStatus = {
  Normal: 1,
  Deleted: 2,
};

ep_service_common.CourseAdminStatus = {
  Normal: 1,
  OffShelf: 2,
  Banned: 3,
  Suspend: 4,
};

ep_service_common.CourseStatus = {
  New: 1,
  OffShelf: 2,
  OnSale: 3,
  OffSale: 4,
  Deleted: 5,
};

ep_service_common.CourseRelationActionType = {
  CourseLessonUpdate: 1,
  StudentCourseUpdate: 2,
  TeacherCourseUpdate: 3,
};

ep_service_common.CourseServiceType = {
  Live: 1,
  Replay: 2,
  StudyGroup: 3,
  QuestionAnswerGroup: 4,
  QuestionAnswerLive: 5,
  PaperReview: 6,
  PhysicalMaterial: 7,
  ElectronicMaterial: 8,
  StudyAssistant: 9,
  Other: 10,
  NoService: 11,
};

ep_service_common.CourseServicePeriodType = {
  Month: 1,
  Day: 2,
};

ep_service_common.ReviewStatus = {
  Unprocessed: 1,
  Reviewing: 2,
  Passed: 3,
  NoPass: 4,
  ReadyReview: 5,
  Preprocessing: 6,
};

ep_service_common.ReviewType = {
  Unknown: 0,
  Normal: 1,
  Quality: 2,
  SpotCheck: 3,
};

ep_service_common.RoomStatus = {
  Unknown: 0,
  Inactive: 1,
  BeforeTeaching: 2,
  DuringTeaching: 3,
  AfterTeaching: 4,
  Close: 5,
  PlaybackReady: 6,
  NoPlayback: 7,
};

ep_service_common.TransCodeResult = {
  Success: 1,
  Failure: 2,
};

ep_service_common.CourseType = {
  LiveCourse: 1,
  VideoCourse: 2,
  CombinationCourse: 3,
};

ep_service_common.VersionType = {
  Latest: 1,
  Online: 2,
};

ep_service_common.LessonConflictType = {
  TimeOverlap: 1,
  K12Irregularity: 2,
};

ep_service_common.LessonTrialType = {
  Unknown: 0,
  Disable: 1,
  CanTrial: 2,
  Trial5Min: 3,
  Trial10Min: 4,
  Trial15Min: 5,
};

ep_service_common.LessonType = {
  LiveLesson: 1,
  VideoLesson: 2,
  LessonUnit: 3,
};

ep_service_common.ListDirection = {
  Forward: 1,
  Backward: 2,
};

ep_service_common.LessonUserStatus = {
  Normal: 1,
  Deleted: 2,
};

ep_service_common.LessonVersionReplaceStatus = {
  Normal: 1,
  Replaced: 2,
};

ep_service_common.LessonReviewStatus = {
  Unprocessed: 1,
  Reviewing: 2,
  Passed: 3,
  Dropped: 4,
  Preprocessing: 5,
  PreprocessCompleted: 6,
};

ep_service_common.CouponTemplateStatus = {
  Reserve: 0,
  Created: 1,
  Deleted: 2,
};

ep_service_common.CouponTemplateQueryType = {
  Reserve: 0,
  WaitPublish: 1,
  Publishing: 2,
  StopPublish: 3,
};

ep_service_common.IssueSubject = {
  Reserve: 0,
  Merchant: 1,
  PlatForm: 2,
};

ep_service_common.DiscountType = {
  Reserve: 0,
  Cash: 1,
  Discount: 2,
  FullReduction: 3,
};

ep_service_common.ReceiveType = {
  Reserve: 0,
  Public: 1,
  Private: 2,
};

ep_service_common.CouponRuleType = {
  Reserve: 0,
  Issue: 1,
  GiveOut: 2,
  Use: 3,
};

ep_service_common.CouponRuleKey = {
  Reserve: 0,
  FullNum: 1,
  AbsoluteStartTime: 2,
  AbsoluteEndTime: 3,
  ReceiveDayRange: 4,
  ReceiveNextDay: 5,
  CourseType: 6,
  CourseId: 7,
  ProductId: 8,
  GradeType: 9,
  MerchantID: 10,
  SubjectID: 11,
  NewPurchaseProductID: 12,
  NewFinishedProductID: 13,
};

ep_service_common.UserCouponStatus = {
  Reserve: 0,
  WaitReceive: 1,
  WaitUse: 2,
  Use: 3,
  Expired: 4,
  Frozen: 5,
  Refused: 6,
};

ep_service_common.UserCouponReceiveType = {
  Reserve: 0,
  Normal: 1,
  Send: 2,
};

ep_service_common.ExpireType = {
  Reserve: 0,
  Absolute: 1,
  Relative: 2,
  RelativeNextDay: 3,
};

ep_service_common.JudgeStatus = {
  SUCCESS: 1,
  FAILED: 2,
  JUDGING: 3,
};

ep_service_common.ItemCorrectStatus = {
  CORRECT: 1,
  HALF_CORRECT: 2,
  INCORRECT: 3,
};

ep_service_common.StudentPaperStatus = {
  NOT_STARTED: 1,
  WAIT_COMPLETE: 2,
  JUDGING: 3,
  JUDGE_COMPLETE: 4,
};

ep_service_common.StudentPaperAdminStatus = {
  NORMAL: 1,
  TEACHER_BANED: 2,
  ADMIN_BANED: 3,
  REFUNDED_BANED: 4,
};

ep_service_common.CouponTemplateUseScope = {
  Reserve: 0,
  Good: 1,
  Category: 2,
};

ep_service_common.VerifyCodeScene = {
  Coupon: 1,
  GiftedLesson: 2,
  BoughtGoods: 3,
  Withdraw: 4,
};

ep_service_common.ItemJudgeStatus = {
  WaitJudge: 1,
  JudgeComplete: 2,
};

ep_service_common.BankAccountProperty = {
  Personal: 0,
  Corporate: 1,
};

ep_service_common.CoursewareTranscodeType = {
  Original: 1,
  ThreeQuarters: 2,
};

ep_service_common.PresentType = {
  InjectCourse: 1,
};

ep_service_common.PresentStatus = {
  New: 1,
  Active: 2,
  Inactive: 3,
};

ep_service_common.ReceiveStatus = {
  Default: 0,
  Invalid: 1,
  Pending: 2,
  Received: 3,
  Inactive: 4,
};

ep_service_common.RankType = {
  Popular: 1,
};

ep_service_common.GoodsRankStatus = {
  Normal: 1,
  Drop: 2,
};

ep_service_common.RankAdminStatus = {
  Normal: 1,
  Drop: 2,
  Preview: 3,
};

ep_service_common.OrganizationRole = {
  Owner: 1,
  SuperAdmin: 2,
  Admin: 4,
  Teacher: 8,
  Salesperson: 16,
};

ep_service_common.OrganizationType = {
  Individual: 1,
  Enterprise: 2,
};

ep_service_common.ReceiveSourceType = {
  CourseStudents: 1,
  BatchMobiles: 2,
};

ep_service_common.SchemaType = {
  GoodsId: 1,
  H5Url: 2,
  Schema: 3,
};

ep_service_common.BannerType = {
  Banner: 1,
  Popup: 2,
  Float: 3,
};

ep_service_common.BannerStatus = {
  Draft: 1,
  Preview: 2,
  Online: 3,
  Offline: 4,
};

ep_service_common.ReachUser = {
  All: 1,
  Mirror: 2,
  Libra: 3,
};

ep_service_common.TeaPlanStatus = {
  UnPublished: 1,
  Wait: 2,
  Running: 3,
  Pause: 4,
  Testing: 5,
  Finished: 6,
  WaitDownStream: 7,
};

ep_service_common.UserStatus = {
  Normal: 1,
  Deleted: 2,
};

ep_modeluser.UserStatus = {
  Normal: 1,
  Deleted: 2,
  Anonymous: 3,
};

ep_modelcommon.CodecType = {
  H264: 1,
  H265: 2,
  H264DashEncrypt: 3,
};

ep_modelcommon.VideoDefinition = {
  V360P: 1,
  V480P: 2,
  V540P: 3,
  V720P: 4,
  V1080P: 5,
};

ep_modelcommon.PayStatus = {
  Reserve: 0,
  WaitToPay: 1,
  Success: 2,
  Closed: 3,
  Refunding: 4,
  Refunded: 5,
};

ep_modelcommon.PackLevel = {
  LV25: 25,
  LV50: 50,
  LV75: 75,
  LV100: 100,
};

ep_modelcommon.CellType = {
  Course: 1,
  Lesson: 2,
  Rating: 3,
  Material: 4,
  Student: 5,
  Teacher: 6,
  Banner: 7,
  User: 8,
  Goods: 9,
  LiveCourse: 10,
  VideoCourse: 11,
  VideoLesson: 12,
  CourseInfo: 13,
  LessonInfo: 14,
  Block: 15,
  Item: 16,
  LessonUnit: 17,
};

ep_modelcommon.RequestVersionType = {
  UnSet: 0,
  Online: 1,
  Latest: 2,
};

ep_modelcommon.BanRule = {
  WARN: 1,
  INTERCEPT: 2,
};

ep_modelcommon.StudentCourseRelation = {
  Success: 2,
  Refunded: 5,
};

ep_modelcommon.LabelType = {
  ThirdCategory: 1,
  SellingPoints: 2,
  GoodsTags: 3,
};

ep_modelcommon.VideoTokenScene = {
  WebH5: 1,
  Aweme: 2,
};

ep_user.UserStatus = {
  Normal: 0,
  Deleted: 1,
  Anonymous: 2,
};

ep_user.CheckInScene = {
  Login: 1,
  Launch: 2,
  Profile: 3,
};

ep_user.PunishType = {
  BanAll: 1,
};

ep_user.PunishOrgType = {
  BanCourseCreate: 1,
};

ep_user.EntityType = {
  Coupon: 1,
  GiftedLesson: 2,
  BoughtGoods: 3,
  PresentCourse: 4,
};

ep_user.OauthPlatform = {
  Unknow: 0,
  DouYin: 1,
  TouTiao: 2,
  Apple: 3,
  HuoShan: 4,
};

ep_user.OrgRankStatus = {
  Normal: 1,
  Reviewing: 2,
};

ep_user.CryptoDataType = {
  Default: 0,
  UserID: 1,
  DeviceID: 2,
};

ep_user.MemberStatus = {
  Normal: 0,
  Frozen: 1,
};

ep_user.CreateType = {
  Normal: 0,
  Prebuilt: 1,
};

ep_user.InviteStatus = {
  Inviting: 0,
  Invalid: 1,
  Accepted: 2,
};

ep_user.OrgRankSetAction = {
  Create: 1,
  Edit: 2,
  Delete: 3,
};

ep_user.ChannelType = {
  ZFB: 1,
  WX: 2,
  PA: 3,
};

ep_user.OperatorStatus = {
  Null: 0,
  Create: 1,
  NeedVerify: 2,
  VerifyEffecting: 3,
  Examine: 4,
  NeedSign: 5,
  SignEffecting: 6,
  Success: 7,
  Fail: 8,
  UpdateFail: 9,
  Update: 10,
};

ep_user.OrgType = {
  Private: 0,
  Public: 2,
  Single: 1,
};

ep_user.BankcardType = {
  Private: 1,
  Public: 2,
};

ep_user.ContactType = {
  LEGAL_PERSON: 0,
  MANAGER: 1,
};

ep_user.SearchType = {
  ActivityID: 1,
  ChannelTitle: 2,
  ActivityTitle: 3,
  LaunchWay: 4,
  SelfProperty: 5,
};

ep_user.BusinessType = {
  EPWebPage: 1,
};

ep_user.DefaultStatus = {
  AvatarDefault: 1,
  NickNameDefault: 2,
  TagDefault: 3,
  IntroDefault: 4,
  IntroTooShort: 5,
  AllChanged: 6,
  Processing: 7,
  Unknown: 8,
};

toutiao_passport_common_interface.UserValue = {
  VALUE_LOW: 0,
  VALUE_MIDDLE: 1,
  VALUE_HIGH: 2,
};

toutiao_passport_common_interface.DataType = {
  UNKNOWN: 0,
  ORDINARY_PERSONAL_INFORMATION: 1,
  BASIC_PERSONAL_INFORMATION: 2,
  PERSONAL_IDENTITY_INFORMATION: 3,
  PERSONAL_LOCATION_INFORMATION: 4,
  SYSTEM_OR_NETWORK_IDENTIFIER_INFORMATION: 5,
  PERSONAL_DEVICE_INFORMATION: 6,
  JOB_AND_EDUCATION_INFORMATION: 7,
  PERSONAL_FINANCIAL_INFORMATION: 8,
  PERSONAL_SOCIAL_CONTACT_INFORMATION: 9,
  APPLICATION_INFORMATION: 10,
  SERVICE_CONTENT_INFORMATION: 11,
  SERVICE_LOG_INFORMATION: 12,
  PRODUCT_CONTENT_DATA: 13,
  PERSONAL_BIOMETRIC_INFORMATION: 14,
  OTHERS: 15,
};

ep_messageuser.TeachingField = {
  K12: 1,
  PrimaryChinese: 11,
  PrimaryMaths: 12,
  PrimaryEnglish: 13,
  MiddleChinese: 41,
  MiddleMaths: 42,
  MiddleEnglish: 43,
  MiddlePhysical: 44,
  MiddleChemistry: 45,
  MiddleHistory: 46,
  MiddleGeography: 47,
  MiddleBiological: 48,
  MiddlePolitics: 49,
  HighChinese: 71,
  HighMaths: 72,
  HighEnglish: 73,
  HighPhysical: 74,
  HighChemistry: 75,
  HighHistory: 76,
  HighGeography: 77,
  HighBiological: 78,
  HighPolitics: 79,
  Other: 255,
  AllEnglish: 303,
  AllLanguageJapanese: 328,
  AllLanguageGerman: 329,
  AllLanguageKorean: 333,
  AllRobotEducation: 338,
  AllLanguageTeaching: 371,
  AllLanguageDigital: 372,
  AllLanguageChinese: 373,
  AllLanguageSpanish: 374,
  AllLanguageFrench: 375,
  AllLanguageOther: 376,
  AllLanguageEnglishInland: 377,
  AllLanguageEnglishBusiness: 378,
  AllLanguageEnglishOutland: 379,
  AllLanguageEnglishSpoken: 380,
  AllLanguageEnglishOther: 381,
  AllLanguagePortuguese: 382,
  AllLanguageRussian: 383,
  PreEducation: 434,
  PreInterest: 435,
  PreEnlightenment: 436,
  AdultVocationalEducation: 520,
  AdultExamAcademic: 530,
  AdultExamPublicOffices: 531,
  AdultInterestOther: 532,
  AdultParentEducation: 537,
  AdultSkillKnowledgePayment: 539,
  AdultSkillCook: 540,
  AdultSkillManage: 541,
  AdultSkillOffice: 542,
  AdultSkillDesign: 543,
  AdultSkillProductOperation: 544,
  AdultSkillIt: 545,
  AdultSkillOther: 546,
  AdultSkillDriving: 547,
  AdultSkillHr: 548,
  AdultOverseasApply: 549,
  AdultOverseasCoach: 550,
  AdultOverseasImprove: 551,
  AdultOverseasInternship: 552,
  AdultOverseasOther: 553,
  AdultInterestSport: 554,
  AdultInterestAct: 555,
  AdultInterestDance: 556,
  AdultInterestCamera: 557,
  AdultInterestPersonalAppearance: 558,
  AdultInterestMusic: 559,
  AdultInterestArt: 560,
  AdultInterestFitness: 561,
  AdultInterestCook: 562,
  AdultInterestLifeSkills: 563,
  AdultExamTeaching: 564,
  AdultExamJudiciary: 565,
  AdultExamTeacherCertification: 566,
  AdultExamPostgraduate: 567,
  AdultExamOther: 568,
  AdultExamIt: 569,
  AdultExamArchitecture: 570,
};

ep_messageuser.CertificateType = {
  TeacherCertK12: 1,
  TeacherCertPreK: 2,
  TeacherCertVocational: 3,
  TeacherCertUniversity: 4,
  TeacherCertAdult: 5,
  AcademicCertificate: 6,
  DaycareWorker: 7,
  QualificationCert: 8,
  ProfessionalTitle: 9,
  PlatformWeibo: 10,
  PlatformDouyin: 11,
  PlatformHuoshan: 12,
  PlatformXigua: 13,
  PlatformToutiao: 14,
  PlatformOther: 15,
  LecturerOffer: 16,
  Other: 255,
};

ep_growscore.GrowScoreScene = {
  ClassRoomSign: 1,
  ClassRoomVote: 2,
  ClassRoomWatch: 3,
  ClassRoomFinish: 4,
  VideoLessonSign: 5,
  VideoLessonWatch: 6,
  VideoLessonFinish: 7,
  ClassRoomQuizSingleJudge: 8,
  ClassRoomQuizSubmit: 9,
  ClassRoomQuizJudge: 10,
  PaperPreviewSubmit: 11,
  PaperPreviewJudge: 12,
  PaperReviewSubmit: 13,
  PaperReviewJudge: 14,
};

ep_growscore.RelatedObjectType = {
  Course: 1,
  Lesson: 2,
  Classroom: 3,
  Vote: 4,
  StudentPaper: 5,
  Quiz: 6,
};

ep_growscore.GrowScoreStatus = {
  Normal: 1,
  PartlyValid: 2,
  Invalid: 3,
};

ep_growscore.GrowScoreOperationStatus = {
  Success: 0,
  ConfNotMatch: 1,
  Duplicate: 2,
  OverSceneDailyLimit: 3,
  Invalid: 4,
};

ep_logistics_receiver.LogisticsEntryStatus = {
  None: 0,
  FillAddress: 1,
  CheckLogistics: 2,
};

toutiao_passport_gobiz.StatusCode = {
  SUCCESS: 0,
  PARAM_ERROR: 1,
  PERMISSION_DENIED: 2,
  RECOVER_ACCOUNT_LOGINNAME_CONFLICT: 3,
  RECOVER_ACCOUNT_CONFLICT: 4,
  EMAIL_CONFLICT: 5,
  DATA_NOT_EXIST: 6,
  BIND_NOT_EXIST: 7,
  CONCURRENT: 8,
  MOBILE_CONFLICT: 9,
  MOBILE_LOCKED: 10,
  BATCH_LIMIT: 11,
  OPERATION_NOT_ALLOWED: 12,
  NON_LOCAL_DATA: 13,
  APP_NOT_SUPPORT: 14,
  CONNECT_CONFLICT: 15,
  NOT_COMPLIANCE_AVATAR: 16,
  TICKET_EXPIRED: 17,
  IS_NOT_EMPLOYEE: 18,
  NOT_ALLOW_CANCEL: 19,
  USER_LOCKED: 20,
  ACCOUNT_LIMIT: 21,
  SERVER_ERROR: 99,
};

toutiao_passport_gobiz.PlatformName = {
  ALL: -1,
  SN_WEIBO: 1,
  QQ_WEIBO: 2,
  RENREN_SNS: 3,
  KAIXIN_SNS: 4,
  QZONE_SNS: 5,
  XH_WEIBO: 6,
  BAIDU: 7,
  MOBILE: 8,
  TWITTER: 9,
  FACEBOOK: 10,
  WX: 11,
  EMAIL: 12,
  HW: 13,
  FM: 14,
  LETV: 15,
  TELECOM: 16,
  PANDA_TV: 17,
  GOOGLE: 18,
  XM: 19,
  LINE: 20,
  HUYA_TV: 21,
  LONGZHU_TV: 22,
  ZHANQI_TV: 23,
  KAKAOTALK: 24,
  TOUTIAO: 25,
  OPPO: 26,
  INSTAGRAM: 27,
  OLD_HOTSOON: 28,
  LIVE_STREAM: 29,
  AWEME: 30,
  M_TWITTER: 31,
  VK: 32,
  NUBIA: 33,
  NAVER: 34,
  TB_TWITTER: 35,
  OPPO_VIDEO: 36,
  ZFB: 57,
};

toutiao_passport_gobiz.MobileRelationStatus = {
  ERROR: -1,
  UNKOWN: 0,
  SELF: 1,
  CONTACT: 2,
  UNRELATED: 3,
};

toutiao_passport_gobiz.AccountType = {
  UNKNOWN: 0,
  EMAIL: 1,
  MOBILE: 2,
};

toutiao_passport_gobiz.EnterpriseUserType = {
  UNKNOWN: 0,
  EMPLOYEE: 1,
};

toutiao_passport_gobiz.CreateUserType = {
  MOBILE_ONLY: 1,
  MOBILE_PASSWORD: 2,
  EMAIL_PASSWORD: 3,
  USERNAME_PASSWORD: 4,
};

toutiao_passport_gobiz.CancelStatus = {
  ACCOUNT_NORMAL: 0,
  ACCOUNT_CANCELLING: 1,
  ACCOUNT_CANCELLED: 2,
  ACCOUNT_DELETED: 3,
};

toutiao_passport_gobiz.CancelType = {
  UNKONWN: 0,
  CANCEL_EMPLOYEE: 1,
};

toutiao_passport_gobiz.DeleteCleanType = {
  ONLY_DELETE_DB_DATA: 1,
};

toutiao_passport_gobiz.VcdAuthorizedStatus = {
  VCD_GRANTED: 1,
};

toutiao_passport_gobiz.CacheTag = {
  DEFAULT: 0,
  KEEP_USER_INFO_CACHE: 1,
};

toutiao_passport_gobiz.ApplyUri = {
  LEGAL_ENTITY_CHANGE: 1,
  APPCLOUD_LOGIC_DELETE: 2,
};

account_base.Gender = {
  UNKNOWN: 0,
  MALE: 1,
  FEMALE: 2,
};

account_base.MobileType = {
  UNKNOWN: 0,
  NORNAL_MOBILE: 1,
  VIRTUAL_MOBILE: 2,
};

account_base.MessageUserPlatformID = {
  weibo: 1,
  qq_weibo: 2,
  baidu: 3,
  panda_tv: 17,
  huya_tv: 21,
  longzhu_tv: 22,
  zhanqi_tv: 23,
  hotsoon: 28,
  automobile: 29,
  ies_hotsoon: 30,
  ies_aweme: 31,
  biu: 32,
  news_article_comment: 33,
  topbuzz_twitter: 34,
  topbuzz_facebook: 35,
  topbuzz_others: 36,
  bds_comment: 37,
  aikan: 38,
  hotsoon_pinterest: 39,
  vigo: 40,
  learning: 41,
  topbuzz_instagram: 42,
  topbuzz_youtube: 43,
  buzzshare: 44,
  l_project: 45,
  novel_pay: 46,
  ttgame_message_user: 47,
  beauty_me_message_user: 48,
  p_message_user: 49,
  ppx_i18n: 50,
  game_video: 51,
  qa_auto: 52,
  toutiao_video_aweme: 53,
  toutiao_video_huoshan: 54,
  homed_message_user: 55,
  toutiao_video_message_user: 56,
  vinna_message_user: 57,
  htcf_message_user: 58,
  toutiao_lite_message_user: 59,
  toutiao_video_ad: 60,
  f_message_user: 61,
  h_project: 62,
};

account_base.AccountStatus = {
  USER_NOT_EXIST: 0,
  NORMAL: 1,
  DELETING: 2,
  DELETED: 3,
  MESSAGE_USER: 4,
  DELETED_MESSAGE_USER: 5,
};

account_base.CancelApplyAuditStatus = {
  AuditStatusDuring: 0,
  AuditStatusPass: 1,
  AuditStatusRefuse: 2,
  AuditStatusEnd: 3,
  AuditStatusDeleteFail: 4,
  AuditStatusConfirm: 10,
  AuditStatusNewEnd: 11,
  AuditStatusNewRefuse: 12,
  AuditStatusNewDeleteFail: 13,
};

account_base.CancelApplyCancelStatus = {
  CancelStatusNo: 0,
  CancelStatusYes: 1,
};

account_base.CancelApplyCancelMode = {
  CancelModeOrigin: 1,
  CancelModeByValue: 2,
};

account_base.DeathState = {
  AccountStateUnknown: 0,
  AccountStateNormal: 1,
  AccountStateDeath: 2,
  AccountStateDeathLock: 3,
};

ep_goods_common.GoodsCommodityStatus = {
  New: 1,
  OffShelf: 2,
  OnSale: 3,
  OffSale: 4,
};

ep_goods_common.CommodityStatusReasonType = {
  UserOperation: 1,
  OffSaleBeforeStart: 2,
  OffSaleAfterEnd: 3,
  OffSaleQualityReivew: 4,
  OffSaleOrgPunish: 5,
  ElectronicCommerce: 6,
  GoodsSpotCheck: 7,
  SkuOffline: 8,
  UserSkuOperation: 9,
};

ep_goods_common.GoodsAdminStatus = {
  Normal: 1,
  OffShelf: 2,
  Banned: 3,
  Suspended: 4,
};

ep_goods_common.GoodsUserStatus = {
  Normal: 1,
  Deleted: 2,
};

ep_goods_common.GoodsRelatedStatus = {
  OffShelf: 1,
  OnShelf: 2,
};

ep_goods_common.GoodsType = {
  LiveCourse: 1,
  VideoCourse: 2,
  CombinationCourse: 3,
};

ep_goods_common.GoodsSellUnitType = {
  Course: 1,
};

ep_goods_common.GoodsStatus = {
  New: 1,
  OffShelf: 2,
  OnSale: 3,
  OffSale: 4,
  Deleted: 5,
  WaitOnSale: 7,
  Banned: 8,
};

ep_goods_common.GoodsReviewStatus = {
  New: 1,
  Reviewing: 2,
  Passed: 3,
  NoPass: 4,
  Cancel: 5,
  Fail: 6,
};

ep_goods_common.RefundRuleType = {
  BeforeEffectiveTime24h: 1,
  NotSupport: 2,
  Support: 3,
  BeforeFinished: 4,
  NotLearnIn7Days: 5,
};

ep_goods_common.OnShelfType = {
  Now: 1,
  Pause: 2,
  Book: 3,
};

ep_goods_common.StudyExpireType = {
  ExpireByPurchaseTime: 1,
  AbsoluteExpireTime: 2,
  NeverExpires: 3,
};

ep_goods_common.StudyExpireByPurchaseType = {
  Day: 1,
  Month: 2,
  Year: 3,
};

ep_goods_common.ShareType = {
  FreeGoods: 1,
  AwemeGoods: 2,
  NewUserPackage: 3,
};

ep_goods_common.CannotReceiveReason = {
  Default: 0,
  ShareLimit: 1,
  StockLimit: 2,
  GoodsNotAvailable: 3,
  ReceivedAlready: 4,
};

ep_goods_common.GoodsBatchTaskStatus = {
  Create: 1,
  Success: 2,
  Fail: 3,
};

ep_goods_common.PlanStatus = {
  WaitAgree: 1,
  Refused: 2,
  Active: 3,
  Paused: 4,
  Closed: 5,
  Deleted: 6,
};

ep_goods_common.MainQueryType = {
  All: 1,
  Active: 2,
  UnActive: 3,
};

ep_goods_common.AuxiliaryQueryType = {
  All: 1,
  Acked: 2,
  UnAck: 3,
};

ep_goods_common.JointDataQueryType = {
  Main: 1,
  Auxiliary: 2,
};

ep_goods_common.GoodsAggregationStatus = {
  Draft: 1,
  Reviewing: 2,
  Unpass: 3,
  OnShelf: 4,
  OnShelfCancel: 5,
  OnShelfReviewing: 6,
  OnShelfUnpass: 7,
  OffShelf: 8,
  GoodsBan: 9,
  CourseBan: 10,
};

ep_goods_common.SkuStatus = {
  Reviewing: 1,
  OnShelf: 2,
  OffShelf: 3,
};

ep_goods_common.GoodsAdminCategoryQueueType = {
  InitialQueue: 1,
  QualityQueue: 2,
  CorrectedQueue: 3,
  PopularQueue: 4,
};

ep_modellesson.LessonStatus = {
  Normal: 1,
  Dropped: 2,
};

ep_modellesson.LiveAuthType = {
  NoBuy: 1,
  CanTrail: 2,
  Buyed: 3,
};

ep_modellesson.PlayAuthType = {
  NoBuy: 1,
  CanTrail: 2,
  Buyed: 3,
};

ep_modellesson.StudyReportStatus = {
  NotSupport: 0,
  NotGen: 1,
  NotStudy: 2,
  Building: 3,
  Ready: 4,
};

ep_modelcourse.LearningProgressType = {
  LiveLesson: 1,
  VideoLesson: 2,
};

ep_modelcourse.TaskTipType = {
  UncompletedPreview: 1,
  UncompletedHomework: 2,
  NextLiveLesson: 3,
};

ep_modelcourse.VideoLessonProgressType = {
  UnStart: 1,
  Learning: 2,
  Finished: 3,
};

ep_rating_common.Status = {
  PENDING: 1,
  REVIEWING: 2,
  PASS: 3,
  DROPPED: 4,
  HIGH_RISK: 5,
  PREPROCESS_FAIL: 6,
};

ep_rating_common.UserStatus = {
  OPEN: 3,
  DELETE: 4,
};

ep_rating_common.AdminStatus = {
  PASS: 3,
  DROPPED: 4,
};

ep_rating_common.Score = {
  VERY_BAD: 10,
  BAD: 20,
  NORMAL: 30,
  GOOD: 40,
  VERY_GOOD: 50,
};

ep_rating_common.OperateSource = {
  UNKNOWN: 0,
  APP: 100,
  SCRIPT: 200,
};

ep_rating_common.RatingListType = {
  Reverse: 0,
  CourseRating: 1,
  TeacherRating: 2,
};

ep_trade_stock.TccTryErrCode = {
  OK: 0,
  NotEnough: 2,
  Unknown: 99,
};

ep_trade_stock.UserTradeStockStatus = {
  Tried: 1,
  Committed: 2,
  Canceled: 3,
  Refunded: 4,
};

ep_trade_stock.TradeType = {
  Sale: 1,
  PresentCourse: 2,
};

ep_modelrating.RatingStatus = {
  Normal: 1,
  Reviewing: 2,
  Dropped: 3,
  NoVisible: 4,
};

ep_modelrating.ScoreLevel = {
  Reverse: 0,
  BAD: 1,
  NORMAL: 2,
  GOOD: 3,
  HasPhoto: 97,
  HasAppend: 98,
  ALL: 99,
};

ep_modelrating.Score = {
  VERY_BAD: 10,
  BAD: 20,
  NORMAL: 30,
  GOOD: 40,
  VERY_GOOD: 50,
};

ep_modelrating.RatingListType = {
  COURSE: 1,
  TEACHER: 2,
};

ep_service_common.FieldTeacherUid = "teacher_uid";

ep_service_common.FieldCourseTime = "course_time";

ep_service_common.FieldCourseEidtableCount = "course_editable_count";

ep_service_common.OrganizationOwner = "owner";

ep_service_common.OrganizationSuperAdmin = "super_admin";

ep_service_common.OrganizationAdmin = "admin";

ep_service_common.OrganizationTeacher = "teacher";

ep_service_common.OrganizationSalesperson = "salesperson";

ep_service_common.OrganizationRoleKeyMap = {
  1: "owner",
  2: "super_admin",
  4: "admin",
  8: "teacher",
  16: "salesperson",
};

ep_service_common.OrganizationKeyRoleMap = {
  owner: 1,
  super_admin: 2,
  admin: 4,
  teacher: 8,
  salesperson: 16,
};

ep_service_common.PermissionAccountManage = "account_manage";

ep_service_common.PermissionAllocateAdmin = "allocate_admin";

ep_service_common.PermissionAllocateTeacher = "allocate_teacher";

ep_service_common.PermissionAllocateSalesperson = "allocate_salesperson";

ep_service_common.PermissionAuthorityVisible = "authority_visible";

ep_service_common.PermissionCardShowTeacher = "card_show_teacher";

ep_service_common.PermissionCoupon = "coupon_all";

ep_service_common.PermissionCourseAdmin = "course_admin";

ep_service_common.PermissionCourseBindDouyinAlert = "course_bind_douyin_alert";

ep_service_common.PermissionCourseCreate = "course_create";

ep_service_common.PermissionCourseDetail = "course_detail";

ep_service_common.PermissionCourseEdit = "course_edit";

ep_service_common.PermissionCourseEditHistory = "course_edit_history";

ep_service_common.PermissionCourseOffSale = "course_off_sale";

ep_service_common.PermissionCourseOnSale = "course_on_sale";

ep_service_common.PermissionCoursePresent = "course_present";

ep_service_common.PermissionCourseShare = "course_share";

ep_service_common.PermissionEnterPlayback = "enter_playback";

ep_service_common.PermissionEnterRoom = "enter_room";

ep_service_common.PermissionEnterRoomHint = "enter_room_hint";

ep_service_common.PermissionHomeworkAdmin = "homework_admin";

ep_service_common.PermissionHomeworkAssign = "homework_assign";

ep_service_common.PermissionHomeworkCorrect = "homework_correct";

ep_service_common.PermissionInvitationList = "invitation_list";

ep_service_common.PermissionMemberList = "member_list";

ep_service_common.PermissionOrderIncome = "order_income";

ep_service_common.PermissionOrderPost = "order_post";

ep_service_common.PermissionRoleList = "role_list";

ep_service_common.PermissionSaleFigure = "sale_figure";

ep_service_common.PermissionSaleSetting = "sale_setting";

ep_service_common.PermissionStudentManage = "student_manage";

ep_service_common.PermissionStudyAdmin = "study_admin";

ep_service_common.PermissionStudyData = "study_data";

ep_service_common.PermissionWithdraw = "withdraw_all";

ep_service_common.PermissionAssistShop = "assist_shop";

ep_service_common.PermissionShowEducation = "show_education";

ep_service_common.PermissionShowData = "show_data";

ep_service_common.PermissionShowFinance = "show_finance";

ep_service_common.PermissionShowCourse = "show_course";

ep_service_common.PermissionShowCommunity = "show_community";

ep_service_common.HomeScreen = 11;

ep_service_common.HomePageOne = 21;

ep_service_common.ChannelPageOne = 31;

ep_service_common.AllPage = 40;

ep_service_common.HomePage = 41;

ep_service_common.LearningPage = 42;

ep_service_common.MyPage = 43;

ep_service_common.DouyinCourseDetailPage = 51;

ep_user.Platform_DouYin = "aweme_v2";

ep_user.Platform_Toutiao = "toutiao_v2";

ep_user.Platform_Apple = "apple";

ep_user.Platform_HuoShan = "live_stream";

ep_user.PiiKey_ConnectedShop = "connected_shop";

ep_user.PiiKey_DouYinNickname = "aweme_nickname";

ep_user.PiiKey_DouYinAvatarUrl = "aweme_avatar_url";

ep_user.PiiKey_BankAccountNumber = "bank_account_no";

ep_user.PiiKey_BankAccountExtra = "bank_account_ext";

ep_user.PiiKey_RealName = "real_name";

ep_user.PiiKey_IdCardNumber = "id_card_no";

ep_user.PiiKey_PlainMobile = "plain_mobile";

ep_user.PiiKey_Application = "application";

ep_user.PiiKey_AuditInfo = "bui_audit_info";

ep_user.PiiKey_ImPushOfficial = "im_push_official";

ep_user.PiiKey_ImPushSocial = "im_push_social";

ep_user.PiiKey_ImPushPreview = "im_push_preview";

ep_user.PiiKey_OrganizationId = "organization";

ep_user.PiiKey_NickName = "account_screen_name";

function enumMock(enumObj) {
  const keys = Object.keys(enumObj);
  if (keys.length === 0) return 0;
  const index = Mock.Random.integer(0, keys.length - 1);
  return enumObj[keys[index]];
}

function arrayMock(min, max, valueMockFunc) {
  const num = Mock.Random.integer(min, max);
  const mockArray = [];
  for (let i = 0; i < num; i++) {
    mockArray.push(valueMockFunc());
  }

  return mockArray;
}

function objectMock(min, max, keyMockFunc, valueMockFunc) {
  const num = Mock.Random.integer(min, max);
  const mockObj = {};
  for (let i = 0; i < num; i++) {
    mockObj[keyMockFunc()] = valueMockFunc();
  }

  return mockObj;
}

const IncentiveApiService = {};

IncentiveApiService.GetPunchCardActivityInfo = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      bought_video_course: Mock.mock("@boolean()"),
      can_involve: Mock.mock("@boolean()"),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.RegisterPunchCard = {
  mock: true,
  method: "POST",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {};

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetPunchCardDetail = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      punch_card_detail: {
        punch_card_id: Mock.mock("@integer(0, 4294967296)"),
        user: {
          uid: Mock.mock("@integer(0, 4294967296)"),
          uid_str: Mock.mock("@id()"),
          pack_level: enumMock(ep_modelcommon.PackLevel),
          status: enumMock(ep_modeluser.UserStatus),
          name: Mock.mock("@cname()"),
          avatar: Mock.mock("@ctitle(2, 9)"),
          intro: Mock.mock("@ctitle(2, 9)"),
          student: {
            grade: enumMock(ep_service_common.GradeType),
            grade_name: Mock.mock("@cname()"),
          },
          teacher: {
            tags: arrayMock(2, 12, () => ({
              label: Mock.mock("@ctitle(2, 9)"),
            })),
            is_settled: Mock.mock("@boolean()"),
            teacher_cert_id: Mock.mock("@integer(0, 4294967296)"),
            real_name: Mock.mock("@cname()"),
            real_avatar: {
              width: Mock.mock("@integer(0, 4294967296)"),
              height: Mock.mock("@integer(0, 4294967296)"),
              uri: Mock.mock("@ctitle(2, 9)"),
              url_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
              is_gif: Mock.mock("@boolean()"),
              download_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
            },
            teacher_cert_id_str: Mock.mock("@id()"),
            teacher_statistics: {
              on_sale_course_number: Mock.mock("@integer(0, 4294967296)"),
              study_student_number: Mock.mock("@integer(0, 4294967296)"),
              favor_rate: Mock.mock("@float()"),
            },
          },
          level: Mock.mock("@integer(0, 4294967296)"),
          im_user_role: enumMock(ep_service_common.UserRole),
          mobile: Mock.mock("@ctitle(2, 9)"),
          total_score: Mock.mock("@integer(0, 4294967296)"),
          next_level_score: Mock.mock("@integer(0, 4294967296)"),
        },
        start_date: Mock.mock("@integer(0, 4294967296)"),
        card_cycle: Mock.mock("@integer(0, 4294967296)"),
        single_card_time: Mock.mock("@integer(0, 4294967296)"),
        medal_type: enumMock(ep_incentive.MedalType),
        punch_card_status: enumMock(ep_incentive.IncentiveStatus),
        card_days: Mock.mock("@integer(0, 4294967296)"),
        total_card_time: Mock.mock("@integer(0, 4294967296)"),
        date: Mock.mock("@integer(0, 4294967296)"),
        date_card_time: Mock.mock("@integer(0, 4294967296)"),
        finish_date: Mock.mock("@integer(0, 4294967296)"),
        notification_types: arrayMock(2, 12, () =>
          enumMock(ep_incentive.NotificationType)
        ),
        notification_time: Mock.mock("@integer(0, 4294967296)"),
        medal_info: {
          medal_type: enumMock(ep_incentive.MedalType),
          receive_time: Mock.mock("@integer(0, 4294967296)"),
          business_id: Mock.mock("@integer(0, 4294967296)"),
          gray_medal_url: Mock.mock("@url()"),
          coloured_medal_url: Mock.mock("@url()"),
          medal_desc: Mock.mock("@cparagraph(1)"),
          single_card_time: Mock.mock("@integer(0, 4294967296)"),
          business_id_str: Mock.mock("@id()"),
          count: Mock.mock("@integer(0, 4294967296)"),
          coloured_foreground_url: Mock.mock("@url()"),
          coloured_background_url: Mock.mock("@url()"),
        },
        punch_card_id_str: Mock.mock("@id()"),
        has_bind_wechat: Mock.mock("@boolean()"),
        week_level: enumMock(ep_incentive.WeekLevelType),
        special_medal: {
          medal_type: enumMock(ep_incentive.MedalType),
          receive_time: Mock.mock("@integer(0, 4294967296)"),
          business_id: Mock.mock("@integer(0, 4294967296)"),
          gray_medal_url: Mock.mock("@url()"),
          coloured_medal_url: Mock.mock("@url()"),
          medal_desc: Mock.mock("@cparagraph(1)"),
          single_card_time: Mock.mock("@integer(0, 4294967296)"),
          business_id_str: Mock.mock("@id()"),
          count: Mock.mock("@integer(0, 4294967296)"),
          coloured_foreground_url: Mock.mock("@url()"),
          coloured_background_url: Mock.mock("@url()"),
        },
        cover_medal: {},
      },
      medal_pop_up_times: Mock.mock("@integer(0, 4294967296)"),
      has_received_medal: Mock.mock("@boolean()"),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetPunchCardBullet = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      bullet_list: arrayMock(2, 12, () => ({
        user: arrayMock(2, 12, () => ({
          uid: Mock.mock("@integer(0, 4294967296)"),
          uid_str: Mock.mock("@id()"),
          pack_level: enumMock(ep_modelcommon.PackLevel),
          status: enumMock(ep_modeluser.UserStatus),
          name: Mock.mock("@cname()"),
          avatar: Mock.mock("@ctitle(2, 9)"),
          intro: Mock.mock("@ctitle(2, 9)"),
          student: {
            grade: enumMock(ep_service_common.GradeType),
            grade_name: Mock.mock("@cname()"),
          },
          teacher: {
            tags: arrayMock(2, 12, () => ({
              label: Mock.mock("@ctitle(2, 9)"),
            })),
            is_settled: Mock.mock("@boolean()"),
            teacher_cert_id: Mock.mock("@integer(0, 4294967296)"),
            real_name: Mock.mock("@cname()"),
            real_avatar: {
              width: Mock.mock("@integer(0, 4294967296)"),
              height: Mock.mock("@integer(0, 4294967296)"),
              uri: Mock.mock("@ctitle(2, 9)"),
              url_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
              is_gif: Mock.mock("@boolean()"),
              download_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
            },
            teacher_cert_id_str: Mock.mock("@id()"),
            teacher_statistics: {
              on_sale_course_number: Mock.mock("@integer(0, 4294967296)"),
              study_student_number: Mock.mock("@integer(0, 4294967296)"),
              favor_rate: Mock.mock("@float()"),
            },
          },
          level: Mock.mock("@integer(0, 4294967296)"),
          im_user_role: enumMock(ep_service_common.UserRole),
          mobile: Mock.mock("@ctitle(2, 9)"),
          total_score: Mock.mock("@integer(0, 4294967296)"),
          next_level_score: Mock.mock("@integer(0, 4294967296)"),
        })),
        bullet_content: Mock.mock("@ctitle(2, 9)"),
      })),
      total_user_count: Mock.mock("@integer(0, 4294967296)"),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetPunchCardRank = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      rank_list: arrayMock(2, 12, () => ({
        user: {
          uid: Mock.mock("@integer(0, 4294967296)"),
          uid_str: Mock.mock("@id()"),
          pack_level: enumMock(ep_modelcommon.PackLevel),
          status: enumMock(ep_modeluser.UserStatus),
          name: Mock.mock("@cname()"),
          avatar: Mock.mock("@ctitle(2, 9)"),
          intro: Mock.mock("@ctitle(2, 9)"),
          student: {
            grade: enumMock(ep_service_common.GradeType),
            grade_name: Mock.mock("@cname()"),
          },
          teacher: {
            tags: arrayMock(2, 12, () => ({
              label: Mock.mock("@ctitle(2, 9)"),
            })),
            is_settled: Mock.mock("@boolean()"),
            teacher_cert_id: Mock.mock("@integer(0, 4294967296)"),
            real_name: Mock.mock("@cname()"),
            real_avatar: {
              width: Mock.mock("@integer(0, 4294967296)"),
              height: Mock.mock("@integer(0, 4294967296)"),
              uri: Mock.mock("@ctitle(2, 9)"),
              url_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
              is_gif: Mock.mock("@boolean()"),
              download_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
            },
            teacher_cert_id_str: Mock.mock("@id()"),
            teacher_statistics: {
              on_sale_course_number: Mock.mock("@integer(0, 4294967296)"),
              study_student_number: Mock.mock("@integer(0, 4294967296)"),
              favor_rate: Mock.mock("@float()"),
            },
          },
          level: Mock.mock("@integer(0, 4294967296)"),
          im_user_role: enumMock(ep_service_common.UserRole),
          mobile: Mock.mock("@ctitle(2, 9)"),
          total_score: Mock.mock("@integer(0, 4294967296)"),
          next_level_score: Mock.mock("@integer(0, 4294967296)"),
        },
        rank: Mock.mock("@integer(0, 4294967296)"),
        total_card_time: Mock.mock("@integer(0, 4294967296)"),
      })),
      next_cursor: Mock.mock("@integer(0, 4294967296)"),
      has_more: Mock.mock("@boolean()"),
      self_rank_info: {
        user: {
          uid: Mock.mock("@integer(0, 4294967296)"),
          uid_str: Mock.mock("@id()"),
          pack_level: enumMock(ep_modelcommon.PackLevel),
          status: enumMock(ep_modeluser.UserStatus),
          name: Mock.mock("@cname()"),
          avatar: Mock.mock("@ctitle(2, 9)"),
          intro: Mock.mock("@ctitle(2, 9)"),
          student: {
            grade: enumMock(ep_service_common.GradeType),
            grade_name: Mock.mock("@cname()"),
          },
          teacher: {
            tags: arrayMock(2, 12, () => ({
              label: Mock.mock("@ctitle(2, 9)"),
            })),
            is_settled: Mock.mock("@boolean()"),
            teacher_cert_id: Mock.mock("@integer(0, 4294967296)"),
            real_name: Mock.mock("@cname()"),
            real_avatar: {
              width: Mock.mock("@integer(0, 4294967296)"),
              height: Mock.mock("@integer(0, 4294967296)"),
              uri: Mock.mock("@ctitle(2, 9)"),
              url_list: arrayMock(2, 12, () => ({})),
              is_gif: Mock.mock("@boolean()"),
              download_list: arrayMock(2, 12, () => ({})),
            },
            teacher_cert_id_str: Mock.mock("@id()"),
            teacher_statistics: {
              on_sale_course_number: Mock.mock("@integer(0, 4294967296)"),
              study_student_number: Mock.mock("@integer(0, 4294967296)"),
              favor_rate: Mock.mock("@float()"),
            },
          },
          level: Mock.mock("@integer(0, 4294967296)"),
          im_user_role: enumMock(ep_service_common.UserRole),
          mobile: Mock.mock("@ctitle(2, 9)"),
          total_score: Mock.mock("@integer(0, 4294967296)"),
          next_level_score: Mock.mock("@integer(0, 4294967296)"),
        },
        rank: Mock.mock("@integer(0, 4294967296)"),
        total_card_time: Mock.mock("@integer(0, 4294967296)"),
      },
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetPunchCardLearnData = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      lesson_list: arrayMock(2, 12, () => ({
        lesson_id: Mock.mock("@integer(0, 4294967296)"),
        lesson_id_str: Mock.mock("@id()"),
        version: Mock.mock("@integer(0, 4294967296)"),
        lesson_type: enumMock(ep_service_common.LessonType),
        pack_level: enumMock(ep_modelcommon.PackLevel),
        title: Mock.mock("@ctitle(4, 6)"),
        teacher_id: Mock.mock("@integer(0, 4294967296)"),
        teacher_id_str: Mock.mock("@id()"),
        course_id: Mock.mock("@integer(0, 4294967296)"),
        course_title: Mock.mock("@ctitle(4, 6)"),
        subjects: arrayMock(2, 12, () => ({
          subject_type: enumMock(ep_service_common.SubjectType),
          name: Mock.mock("@cname()"),
          n_subject_type: Mock.mock("@integer(0, 4294967296)"),
        })),
        course_id_str: Mock.mock("@id()"),
        course_version: Mock.mock("@integer(0, 4294967296)"),
        lesson_number: Mock.mock("@integer(0, 4294967296)"),
        extra: {
          channel: Mock.mock("@ctitle(2, 9)"),
        },
        course_type: enumMock(ep_service_common.CourseType),
        enable_watermark: Mock.mock("@boolean()"),
        enable_anti_theater_rip: Mock.mock("@boolean()"),
        is_k12: Mock.mock("@boolean()"),
        enable_copyright_statement: Mock.mock("@boolean()"),
        enable_screen_prohibited: Mock.mock("@boolean()"),
        org_name: Mock.mock("@cname()"),
        unit_id: Mock.mock("@integer(0, 4294967296)"),
        unit_lesson_number: Mock.mock("@integer(0, 4294967296)"),
        lesson_status: enumMock(ep_modellesson.LessonStatus),
        room_status: enumMock(ep_service_common.RoomStatus),
        start_time: Mock.mock("@integer(0, 4294967296)"),
        end_time: Mock.mock("@integer(0, 4294967296)"),
        real_start_time: Mock.mock("@integer(0, 4294967296)"),
        real_end_time: Mock.mock("@integer(0, 4294967296)"),
        relate_room_id: Mock.mock("@integer(0, 4294967296)"),
        classroom_course_id: Mock.mock("@integer(0, 4294967296)"),
        related_room_id_str: Mock.mock("@id()"),
        classroom_course_id_str: Mock.mock("@id()"),
        live_auth_type: enumMock(ep_modellesson.LiveAuthType),
        room_scale: enumMock(ep_service_common.CourseScale),
        room_schema: Mock.mock("@ctitle(2, 9)"),
        preview: {
          student_paper_status: enumMock(ep_service_common.StudentPaperStatus),
          schema: Mock.mock("@ctitle(2, 9)"),
          student_paper_id: Mock.mock("@integer(0, 4294967296)"),
          student_paper_id_str: Mock.mock("@id()"),
          paper_version_info: {
            android_version: Mock.mock("@id()"),
            ios_version: Mock.mock("@ctitle(2, 9)"),
            rule: enumMock(ep_modelcommon.BanRule),
            title: Mock.mock("@ctitle(4, 6)"),
            message: Mock.mock("@ctitle(4, 6)"),
            cancel_message: Mock.mock("@ctitle(4, 6)"),
            confirm_message: Mock.mock("@ctitle(4, 6)"),
          },
        },
        homework: {
          student_paper_status: enumMock(ep_service_common.StudentPaperStatus),
          schema: Mock.mock("@ctitle(2, 9)"),
          student_paper_id: Mock.mock("@integer(0, 4294967296)"),
          student_paper_id_str: Mock.mock("@id()"),
          paper_version_info: {
            android_version: Mock.mock("@id()"),
            ios_version: Mock.mock("@ctitle(2, 9)"),
            rule: enumMock(ep_modelcommon.BanRule),
            title: Mock.mock("@ctitle(4, 6)"),
            message: Mock.mock("@ctitle(4, 6)"),
            cancel_message: Mock.mock("@ctitle(4, 6)"),
            confirm_message: Mock.mock("@ctitle(4, 6)"),
          },
        },
        study_report: {
          report_type: enumMock(ep_modellesson.StudyReportStatus),
          report_scheme: Mock.mock("@ctitle(2, 9)"),
        },
        cover: arrayMock(2, 12, () => ({
          width: Mock.mock("@integer(0, 4294967296)"),
          height: Mock.mock("@integer(0, 4294967296)"),
          uri: Mock.mock("@ctitle(2, 9)"),
          url_list: arrayMock(2, 12, () => ({
            url: Mock.mock("@url()"),
          })),
          is_gif: Mock.mock("@boolean()"),
          download_list: arrayMock(2, 12, () => ({
            url: Mock.mock("@url()"),
          })),
        })),
        video: {
          uri: Mock.mock("@ctitle(2, 9)"),
          width: Mock.mock("@integer(0, 4294967296)"),
          height: Mock.mock("@integer(0, 4294967296)"),
          url_list: arrayMock(2, 12, () => ({
            url: Mock.mock("@url()"),
            expires: Mock.mock("@integer(0, 4294967296)"),
          })),
          cover_image: {
            width: Mock.mock("@integer(0, 4294967296)"),
            height: Mock.mock("@integer(0, 4294967296)"),
            uri: Mock.mock("@ctitle(2, 9)"),
            url_list: arrayMock(2, 12, () => ({})),
            is_gif: Mock.mock("@boolean()"),
            download_list: arrayMock(2, 12, () => ({})),
          },
          duration: Mock.mock("@float()"),
          alarm_text: Mock.mock("@cparagraph(1)"),
          codec_type: enumMock(ep_modelcommon.CodecType),
          definition: enumMock(ep_modelcommon.VideoDefinition),
          video_model: Mock.mock("@id()"),
          p2p_type: Mock.mock("@integer(0, 4294967296)"),
          file_hash: Mock.mock("@ctitle(2, 9)"),
          animated_cover_image: {},
          play_auth_token: Mock.mock("@ctitle(2, 9)"),
          kds_token: Mock.mock("@ctitle(2, 9)"),
        },
        trial_type: enumMock(ep_service_common.LessonTrialType),
        history: {
          last_play_time: Mock.mock("@integer(0, 4294967296)"),
          last_view_time: Mock.mock("@integer(0, 4294967296)"),
        },
        play_auth_type: enumMock(ep_modellesson.PlayAuthType),
        labels: arrayMock(2, 12, () => Mock.mock("@ctitle(2, 9)")),
        class_title: Mock.mock("@ctitle(4, 6)"),
        danmaku_count: Mock.mock("@integer(0, 4294967296)"),
        video_group_id: Mock.mock("@integer(0, 4294967296)"),
        video_group_id_str: Mock.mock("@id()"),
      })),
      lesson_has_more: Mock.mock("@boolean()"),
      lesson_next_cursor: Mock.mock("@integer(0, 4294967296)"),
      course_list: arrayMock(2, 12, () => ({
        course_id: Mock.mock("@integer(0, 4294967296)"),
        course_id_str: Mock.mock("@id()"),
        version: Mock.mock("@integer(0, 4294967296)"),
        course_type: enumMock(ep_service_common.CourseType),
        pack_level: enumMock(ep_modelcommon.PackLevel),
        title: Mock.mock("@ctitle(4, 6)"),
        cover: arrayMock(2, 12, () => ({})),
        cover_video: {
          uri: Mock.mock("@ctitle(2, 9)"),
          width: Mock.mock("@integer(0, 4294967296)"),
          height: Mock.mock("@integer(0, 4294967296)"),
          url_list: arrayMock(2, 12, () => ({
            url: Mock.mock("@url()"),
            expires: Mock.mock("@integer(0, 4294967296)"),
          })),
          cover_image: {},
          duration: Mock.mock("@float()"),
          alarm_text: Mock.mock("@cparagraph(1)"),
          codec_type: enumMock(ep_modelcommon.CodecType),
          definition: enumMock(ep_modelcommon.VideoDefinition),
          video_model: Mock.mock("@id()"),
          p2p_type: Mock.mock("@integer(0, 4294967296)"),
          file_hash: Mock.mock("@ctitle(2, 9)"),
          animated_cover_image: {},
          play_auth_token: Mock.mock("@ctitle(2, 9)"),
          kds_token: Mock.mock("@ctitle(2, 9)"),
        },
        square_cover: arrayMock(2, 12, () => ({})),
        description: Mock.mock("@cparagraph(1)"),
        subjects: arrayMock(2, 12, () => ({
          subject_type: enumMock(ep_service_common.SubjectType),
          name: Mock.mock("@cname()"),
          n_subject_type: Mock.mock("@integer(0, 4294967296)"),
        })),
        grade_list: arrayMock(2, 12, () =>
          enumMock(ep_service_common.GradeType)
        ),
        enable_group_chat: Mock.mock("@boolean()"),
        enable_single_chat: Mock.mock("@boolean()"),
        preset_lesson_num: Mock.mock("@integer(0, 4294967296)"),
        lesson_num: Mock.mock("@integer(0, 4294967296)"),
        exec_status: enumMock(ep_service_common.CourseExecStatus),
        student_course_relation: enumMock(ep_modelcommon.StudentCourseRelation),
        enable_watermark: Mock.mock("@boolean()"),
        enable_anti_theater_rip: Mock.mock("@boolean()"),
        enable_copyright_statement: Mock.mock("@boolean()"),
        enable_screen_prohibited: Mock.mock("@boolean()"),
        main_teacher: {
          uid: Mock.mock("@integer(0, 4294967296)"),
          uid_str: Mock.mock("@id()"),
          pack_level: enumMock(ep_modelcommon.PackLevel),
          status: enumMock(ep_modeluser.UserStatus),
          name: Mock.mock("@cname()"),
          avatar: Mock.mock("@ctitle(2, 9)"),
          intro: Mock.mock("@ctitle(2, 9)"),
          student: {
            grade: enumMock(ep_service_common.GradeType),
            grade_name: Mock.mock("@cname()"),
          },
          teacher: {
            tags: arrayMock(2, 12, () => ({
              label: Mock.mock("@ctitle(2, 9)"),
            })),
            is_settled: Mock.mock("@boolean()"),
            teacher_cert_id: Mock.mock("@integer(0, 4294967296)"),
            real_name: Mock.mock("@cname()"),
            real_avatar: {},
            teacher_cert_id_str: Mock.mock("@id()"),
            teacher_statistics: {
              on_sale_course_number: Mock.mock("@integer(0, 4294967296)"),
              study_student_number: Mock.mock("@integer(0, 4294967296)"),
              favor_rate: Mock.mock("@float()"),
            },
          },
          level: Mock.mock("@integer(0, 4294967296)"),
          im_user_role: enumMock(ep_service_common.UserRole),
          mobile: Mock.mock("@ctitle(2, 9)"),
          total_score: Mock.mock("@integer(0, 4294967296)"),
          next_level_score: Mock.mock("@integer(0, 4294967296)"),
        },
        lessons: arrayMock(2, 12, () => ({
          lesson_id: Mock.mock("@integer(0, 4294967296)"),
          lesson_id_str: Mock.mock("@id()"),
          version: Mock.mock("@integer(0, 4294967296)"),
          lesson_type: enumMock(ep_service_common.LessonType),
          pack_level: enumMock(ep_modelcommon.PackLevel),
          title: Mock.mock("@ctitle(4, 6)"),
          teacher_id: Mock.mock("@integer(0, 4294967296)"),
          teacher_id_str: Mock.mock("@id()"),
          course_id: Mock.mock("@integer(0, 4294967296)"),
          course_title: Mock.mock("@ctitle(4, 6)"),
          subjects: arrayMock(2, 12, () => ({})),
          course_id_str: Mock.mock("@id()"),
          course_version: Mock.mock("@integer(0, 4294967296)"),
          lesson_number: Mock.mock("@integer(0, 4294967296)"),
          extra: {
            channel: Mock.mock("@ctitle(2, 9)"),
          },
          course_type: enumMock(ep_service_common.CourseType),
          enable_watermark: Mock.mock("@boolean()"),
          enable_anti_theater_rip: Mock.mock("@boolean()"),
          is_k12: Mock.mock("@boolean()"),
          enable_copyright_statement: Mock.mock("@boolean()"),
          enable_screen_prohibited: Mock.mock("@boolean()"),
          org_name: Mock.mock("@cname()"),
          unit_id: Mock.mock("@integer(0, 4294967296)"),
          unit_lesson_number: Mock.mock("@integer(0, 4294967296)"),
          lesson_status: enumMock(ep_modellesson.LessonStatus),
          room_status: enumMock(ep_service_common.RoomStatus),
          start_time: Mock.mock("@integer(0, 4294967296)"),
          end_time: Mock.mock("@integer(0, 4294967296)"),
          real_start_time: Mock.mock("@integer(0, 4294967296)"),
          real_end_time: Mock.mock("@integer(0, 4294967296)"),
          relate_room_id: Mock.mock("@integer(0, 4294967296)"),
          classroom_course_id: Mock.mock("@integer(0, 4294967296)"),
          related_room_id_str: Mock.mock("@id()"),
          classroom_course_id_str: Mock.mock("@id()"),
          live_auth_type: enumMock(ep_modellesson.LiveAuthType),
          room_scale: enumMock(ep_service_common.CourseScale),
          room_schema: Mock.mock("@ctitle(2, 9)"),
          preview: {},
          homework: {},
          study_report: {
            report_type: enumMock(ep_modellesson.StudyReportStatus),
            report_scheme: Mock.mock("@ctitle(2, 9)"),
          },
          cover: arrayMock(2, 12, () => ({})),
          video: {},
          trial_type: enumMock(ep_service_common.LessonTrialType),
          history: {
            last_play_time: Mock.mock("@integer(0, 4294967296)"),
            last_view_time: Mock.mock("@integer(0, 4294967296)"),
          },
          play_auth_type: enumMock(ep_modellesson.PlayAuthType),
          labels: arrayMock(2, 12, () => Mock.mock("@ctitle(2, 9)")),
          class_title: Mock.mock("@ctitle(4, 6)"),
          danmaku_count: Mock.mock("@integer(0, 4294967296)"),
          video_group_id: Mock.mock("@integer(0, 4294967296)"),
          video_group_id_str: Mock.mock("@id()"),
        })),
        org_name: Mock.mock("@cname()"),
        org_id: Mock.mock("@integer(0, 4294967296)"),
        start_time: Mock.mock("@integer(0, 4294967296)"),
        end_time: Mock.mock("@integer(0, 4294967296)"),
        replay_type: enumMock(ep_service_common.ReplayType),
        relate_room_schema: Mock.mock("@ctitle(2, 9)"),
        scale: enumMock(ep_service_common.CourseScale),
        study_end_time: Mock.mock("@integer(0, 4294967296)"),
        study_expire_time: Mock.mock('@time("HH:mm:ss")'),
        fulfill_start: Mock.mock("@integer(0, 4294967296)"),
        fulfill_end: Mock.mock("@integer(0, 4294967296)"),
        has_learn_plan: Mock.mock("@boolean()"),
        material_example_name: Mock.mock("@cname()"),
        material_schema: Mock.mock("@ctitle(2, 9)"),
        newest_material_update_time: Mock.mock("@integer(0, 4294967296)"),
        extra: {
          channel: Mock.mock("@ctitle(2, 9)"),
        },
        task_tips: arrayMock(2, 12, () => ({
          type: enumMock(ep_modelcourse.TaskTipType),
          tip: Mock.mock("@ip()"),
        })),
        learning_progress: {
          comming_live_lesson_id_str: Mock.mock("@id()"),
          live_lesson_title: Mock.mock("@ctitle(4, 6)"),
          room_status: enumMock(ep_service_common.RoomStatus),
          last_study_video_lesson_id_str: Mock.mock("@cname()"),
          video_lesson_title: Mock.mock("@ctitle(4, 6)"),
          video_lesson_progress: Mock.mock("@integer(0, 4294967296)"),
          video_lesson_progress_type: enumMock(
            ep_modelcourse.VideoLessonProgressType
          ),
          lesson_video: {},
        },
        has_learned: Mock.mock("@boolean()"),
        bought_long_time: Mock.mock("@boolean()"),
        added_group_id: Mock.mock("@integer(0, 4294967296)"),
        course_title: Mock.mock("@ctitle(4, 6)"),
        course_square_cover: arrayMock(2, 12, () => ({})),
        first_trial_lesson: {},
        course_service_list: arrayMock(2, 12, () => ({
          course_service_type: enumMock(ep_service_common.CourseServiceType),
        })),
        course_service_valid_period: {
          period_type: enumMock(ep_service_common.CourseServicePeriodType),
          period_value: Mock.mock("@integer(0, 4294967296)"),
        },
      })),
      course_has_more: Mock.mock("@boolean()"),
      course_next_cursor: Mock.mock("@integer(0, 4294967296)"),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetPunchCardDailyRecords = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      punch_card_records: arrayMock(2, 12, () => ({
        date: Mock.mock("@integer(0, 4294967296)"),
        total_card_time: Mock.mock("@integer(0, 4294967296)"),
        today_card_time: Mock.mock("@integer(0, 4294967296)"),
        today_punch_card: Mock.mock("@boolean()"),
      })),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetMedalList = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      medal_list: arrayMock(2, 12, () => ({
        medal_type: enumMock(ep_incentive.MedalType),
        receive_time: Mock.mock("@integer(0, 4294967296)"),
        business_id: Mock.mock("@integer(0, 4294967296)"),
        gray_medal_url: Mock.mock("@url()"),
        coloured_medal_url: Mock.mock("@url()"),
        medal_desc: Mock.mock("@cparagraph(1)"),
        single_card_time: Mock.mock("@integer(0, 4294967296)"),
        business_id_str: Mock.mock("@id()"),
        count: Mock.mock("@integer(0, 4294967296)"),
        coloured_foreground_url: Mock.mock("@url()"),
        coloured_background_url: Mock.mock("@url()"),
      })),
      special_medal_list: arrayMock(2, 12, () => ({
        medal_type: enumMock(ep_incentive.MedalType),
        receive_time: Mock.mock("@integer(0, 4294967296)"),
        business_id: Mock.mock("@integer(0, 4294967296)"),
        gray_medal_url: Mock.mock("@url()"),
        coloured_medal_url: Mock.mock("@url()"),
        medal_desc: Mock.mock("@cparagraph(1)"),
        single_card_time: Mock.mock("@integer(0, 4294967296)"),
        business_id_str: Mock.mock("@id()"),
        count: Mock.mock("@integer(0, 4294967296)"),
        coloured_foreground_url: Mock.mock("@url()"),
        coloured_background_url: Mock.mock("@url()"),
      })),
      normal_medal_list: arrayMock(2, 12, () => ({})),
      total_count: Mock.mock("@integer(0, 4294967296)"),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetMedalInfo = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      medal_list: arrayMock(2, 12, () => ({
        medal_type: enumMock(ep_incentive.MedalType),
        receive_time: Mock.mock("@integer(0, 4294967296)"),
        business_id: Mock.mock("@integer(0, 4294967296)"),
        gray_medal_url: Mock.mock("@url()"),
        coloured_medal_url: Mock.mock("@url()"),
        medal_desc: Mock.mock("@cparagraph(1)"),
        single_card_time: Mock.mock("@integer(0, 4294967296)"),
        business_id_str: Mock.mock("@id()"),
        count: Mock.mock("@integer(0, 4294967296)"),
        coloured_foreground_url: Mock.mock("@url()"),
        coloured_background_url: Mock.mock("@url()"),
      })),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.SetNotification = {
  mock: true,
  method: "POST",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {};

    return JSON.stringify(data);
  },
};

IncentiveApiService.GenWechatToken = {
  mock: true,
  method: "POST",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      wechat_token: Mock.mock("@ctitle(2, 9)"),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetLearnPlanInfo = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      users: arrayMock(2, 3, () => ({
        uid: Mock.mock("@integer(0, 4294967296)"),
        uid_str: Mock.mock("@id()"),
        pack_level: enumMock(ep_modelcommon.PackLevel),
        status: enumMock(ep_modeluser.UserStatus),
        name: Mock.mock("@cname()"),
        avatar: Mock.mock("https://p1-ep.byteimg.com/img/3791/5070639578~0x0.image"),
        intro: Mock.mock("@ctitle(2, 9)"),
        student: {
          grade: enumMock(ep_service_common.GradeType),
          grade_name: Mock.mock("@cname()"),
        },
        teacher: {
          tags: arrayMock(2, 12, () => ({
            label: Mock.mock("@ctitle(2, 9)"),
          })),
          is_settled: Mock.mock("@boolean()"),
          teacher_cert_id: Mock.mock("@integer(0, 4294967296)"),
          real_name: Mock.mock("@cname()"),
          real_avatar: {
            width: Mock.mock("@integer(0, 4294967296)"),
            height: Mock.mock("@integer(0, 4294967296)"),
            uri: Mock.mock("@ctitle(2, 9)"),
            url_list: arrayMock(2, 12, () => ({
              url: Mock.mock("@url()"),
            })),
            is_gif: Mock.mock("@boolean()"),
            download_list: arrayMock(2, 12, () => ({
              url: Mock.mock("@url()"),
            })),
          },
          teacher_cert_id_str: Mock.mock("@id()"),
          teacher_statistics: {
            on_sale_course_number: Mock.mock("@integer(0, 4294967296)"),
            study_student_number: Mock.mock("@integer(0, 4294967296)"),
            favor_rate: Mock.mock("@float()"),
          },
        },
        level: Mock.mock("@integer(0, 4294967296)"),
        im_user_role: enumMock(ep_service_common.UserRole),
        mobile: Mock.mock("@ctitle(2, 9)"),
        total_score: Mock.mock("@integer(0, 100)"),
        next_level_score: Mock.mock("@integer(0, 50)"),
      })),
      learn_plan: {
        id: Mock.mock("@id()"),
        name: Mock.mock("在需求技术评审前，或需求正式开发前，最好能够对需求有个整体的把握，可以把需求拆解的主要功能点写在这里，如果存疑有需要确认的点，也可以在三审或技术评审会议上进行沟通。"),
        course_id: Mock.mock("@id()"),
        desc: Mock.mock("在需求技术评审前，或需求正式开发前，最好能够对需求有个整体的把握，可以把需求拆解的主要功能点写在这里，如果存疑有需要确认的点，也可以在三审或技术评审会议上进行沟通。"),
        benefits: {
          before_desc: Mock.mock("@cparagraph(1)"),
          before_benefits: arrayMock(2, 12, () => ({
            title: Mock.mock("@ctitle(4, 6)"),
            desc: Mock.mock("@cparagraph(1)"),
          })),
          after_desc: Mock.mock("@cparagraph(1)"),
          after_benefits: arrayMock(2, 12, () => ({
            title: Mock.mock("@ctitle(4, 6)"),
            desc: Mock.mock("@cparagraph(1)"),
          })),
        },
        total_sub_task_count: Mock.mock("@integer(0, 100)"),
        accomplish_sub_task_cunt: Mock.mock("@integer(0, 10)"),
        status: enumMock(ep_incentive.IncentiveStatus),
        total_learn_time: Mock.mock("@integer(0, 100)"),
        date_learn_time: Mock.mock("@integer(0, 50)"),
        user: {
          uid: Mock.mock("@integer(0, 4294967296)"),
          uid_str: Mock.mock("@id()"),
          pack_level: enumMock(ep_modelcommon.PackLevel),
          status: enumMock(ep_modeluser.UserStatus),
          name: Mock.mock("@cname()"),
          avatar: Mock.mock("@ctitle(2, 9)"),
          intro: Mock.mock("@ctitle(2, 9)"),
          student: {
            grade: enumMock(ep_service_common.GradeType),
            grade_name: Mock.mock("@cname()"),
          },
          teacher: {
            tags: arrayMock(2, 12, () => ({
              label: Mock.mock("@ctitle(2, 9)"),
            })),
            is_settled: Mock.mock("@boolean()"),
            teacher_cert_id: Mock.mock("@integer(0, 4294967296)"),
            real_name: Mock.mock("@cname()"),
            real_avatar: {
              width: Mock.mock("@integer(0, 4294967296)"),
              height: Mock.mock("@integer(0, 4294967296)"),
              uri: Mock.mock("@ctitle(2, 9)"),
              url_list: arrayMock(2, 12, () => ({})),
              is_gif: Mock.mock("@boolean()"),
              download_list: arrayMock(2, 12, () => ({})),
            },
            teacher_cert_id_str: Mock.mock("@id()"),
            teacher_statistics: {
              on_sale_course_number: Mock.mock("@integer(0, 4294967296)"),
              study_student_number: Mock.mock("@integer(0, 4294967296)"),
              favor_rate: Mock.mock("@float()"),
            },
          },
          level: Mock.mock("@integer(0, 4294967296)"),
          im_user_role: enumMock(ep_service_common.UserRole),
          mobile: Mock.mock("@ctitle(2, 9)"),
          total_score: Mock.mock("@integer(0, 4294967296)"),
          next_level_score: Mock.mock("@integer(0, 4294967296)"),
        },
      },
      total_user_count: Mock.mock("@integer(0, 4294967296)"),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.RegisterLearnPlan = {
  mock: true,
  method: "POST",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {};

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetLearnPlanDetail = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      learn_plan: {
        id: Mock.mock("@id()"),
        name: Mock.mock("@cname()"),
        course_id: Mock.mock("@id()"),
        desc: Mock.mock("@cparagraph(1)"),
        benefits: {
          before_desc: Mock.mock("@cparagraph(1)"),
          before_benefits: arrayMock(2, 12, () => ({
            title: Mock.mock("@ctitle(4, 6)"),
            desc: Mock.mock("@cparagraph(1)"),
          })),
          after_desc: Mock.mock("@cparagraph(1)"),
          after_benefits: arrayMock(2, 12, () => ({
            title: Mock.mock("@ctitle(4, 6)"),
            desc: Mock.mock("@cparagraph(1)"),
          })),
        },
        total_sub_task_count: Mock.mock("@integer(0, 4294967296)"),
        accomplish_sub_task_cunt: Mock.mock("@integer(0, 4294967296)"),
        status: enumMock(ep_incentive.IncentiveStatus),
        total_learn_time: Mock.mock("@integer(0, 4294967296)"),
        date_learn_time: Mock.mock("@integer(0, 4294967296)"),
        user: {
          uid: Mock.mock("@integer(0, 4294967296)"),
          uid_str: Mock.mock("@id()"),
          pack_level: enumMock(ep_modelcommon.PackLevel),
          status: enumMock(ep_modeluser.UserStatus),
          name: Mock.mock("@cname()"),
          avatar: Mock.mock("@ctitle(2, 9)"),
          intro: Mock.mock("@ctitle(2, 9)"),
          student: {
            grade: enumMock(ep_service_common.GradeType),
            grade_name: Mock.mock("@cname()"),
          },
          teacher: {
            tags: arrayMock(2, 12, () => ({
              label: Mock.mock("@ctitle(2, 9)"),
            })),
            is_settled: Mock.mock("@boolean()"),
            teacher_cert_id: Mock.mock("@integer(0, 4294967296)"),
            real_name: Mock.mock("@cname()"),
            real_avatar: {
              width: Mock.mock("@integer(0, 4294967296)"),
              height: Mock.mock("@integer(0, 4294967296)"),
              uri: Mock.mock("@ctitle(2, 9)"),
              url_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
              is_gif: Mock.mock("@boolean()"),
              download_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
            },
            teacher_cert_id_str: Mock.mock("@id()"),
            teacher_statistics: {
              on_sale_course_number: Mock.mock("@integer(0, 4294967296)"),
              study_student_number: Mock.mock("@integer(0, 4294967296)"),
              favor_rate: Mock.mock("@float()"),
            },
          },
          level: Mock.mock("@integer(0, 4294967296)"),
          im_user_role: enumMock(ep_service_common.UserRole),
          mobile: Mock.mock("@ctitle(2, 9)"),
          total_score: Mock.mock("@integer(0, 4294967296)"),
          next_level_score: Mock.mock("@integer(0, 4294967296)"),
        },
      },
      certificate_pop_up_times: Mock.mock("@integer(0, 4294967296)"),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.GetLearnTaskList = {
  mock: true,
  method: "GET",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {
      learn_task_list: arrayMock(5, 6, () => ({
        id: Mock.mock("@id()"),
        name: Mock.mock("@name()"),
        desc: Mock.mock("@cparagraph(1)"),
        parent_task_id: Mock.mock("@id()"),
        type: enumMock(ep_incentive.TaskType),
        related_id: Mock.mock("@id()"),
        related_app: enumMock(ep_incentive.TaskApp),
        icon_url: Mock.mock("https://p1-ep.byteimg.com/img/3791/5070639578~0x0.image"),
        involve_users: arrayMock(2, 3, () => ({
          uid: Mock.mock("@integer(0, 4294967296)"),
          uid_str: Mock.mock("@id()"),
          pack_level: enumMock(ep_modelcommon.PackLevel),
          status: enumMock(ep_modeluser.UserStatus),
          name: Mock.mock("@cname()"),
          avatar: Mock.mock("https://p1-ep.byteimg.com/img/3791/5070639578~0x0.image"),
          intro: Mock.mock("@ctitle(2, 9)"),
          student: {
            grade: enumMock(ep_service_common.GradeType),
            grade_name: Mock.mock("@cname()"),
          },
          teacher: {
            tags: arrayMock(2, 12, () => ({
              label: Mock.mock("@ctitle(2, 9)"),
            })),
            is_settled: Mock.mock("@boolean()"),
            teacher_cert_id: Mock.mock("@integer(0, 4294967296)"),
            real_name: Mock.mock("@cname()"),
            real_avatar: {
              width: Mock.mock("@integer(0, 4294967296)"),
              height: Mock.mock("@integer(0, 4294967296)"),
              uri: Mock.mock("@ctitle(2, 9)"),
              url_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
              is_gif: Mock.mock("@boolean()"),
              download_list: arrayMock(2, 12, () => ({
                url: Mock.mock("@url()"),
              })),
            },
            teacher_cert_id_str: Mock.mock("@id()"),
            teacher_statistics: {
              on_sale_course_number: Mock.mock("@integer(0, 4294967296)"),
              study_student_number: Mock.mock("@integer(0, 4294967296)"),
              favor_rate: Mock.mock("@float()"),
            },
          },
          level: Mock.mock("@integer(0, 4294967296)"),
          im_user_role: enumMock(ep_service_common.UserRole),
          mobile: Mock.mock("@ctitle(2, 9)"),
          total_score: Mock.mock("@integer(0, 4294967296)"),
          next_level_score: Mock.mock("@integer(0, 4294967296)"),
        })),
        total_sub_task_count: Mock.mock("@integer(0, 100)"),
        accomplish_sub_task_cunt: Mock.mock("@integer(0, 50)"),
        status: enumMock(ep_incentive.IncentiveStatus),
      })),
      next_cursor: Mock.mock("@integer(0, 4294967296)"),
      has_more: Mock.mock("@boolean()"),
    };

    return JSON.stringify(data);
  },
};

IncentiveApiService.StartLearnTask = {
  mock: true,
  method: "POST",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {};

    return JSON.stringify(data);
  },
};

IncentiveApiService.FinishLearnTask = {
  mock: true,
  method: "POST",
  // eslint-disable-next-line no-unused-vars
  body: (ctx) => {
    const data = {};

    return JSON.stringify(data);
  },
};

module.exports = {
  [IncentiveApiService.GetPunchCardActivityInfo.method +
  "/IncentiveApiService/ep/incentive/punch_card_activity_info/"]: IncentiveApiService.GetPunchCardActivityInfo,
  [IncentiveApiService.RegisterPunchCard.method +
  "/IncentiveApiService/ep/incentive/register_punch_card/"]: IncentiveApiService.RegisterPunchCard,
  [IncentiveApiService.GetPunchCardDetail.method +
  "/IncentiveApiService/ep/incentive/punch_card_detail/"]: IncentiveApiService.GetPunchCardDetail,
  [IncentiveApiService.GetPunchCardBullet.method +
  "/IncentiveApiService/ep/incentive/punch_card_bullet/"]: IncentiveApiService.GetPunchCardBullet,
  [IncentiveApiService.GetPunchCardRank.method +
  "/IncentiveApiService/ep/incentive/punch_card_rank/"]: IncentiveApiService.GetPunchCardRank,
  [IncentiveApiService.GetPunchCardLearnData.method +
  "/IncentiveApiService/ep/incentive/punch_card_learn_data/"]: IncentiveApiService.GetPunchCardLearnData,
  [IncentiveApiService.GetPunchCardDailyRecords.method +
  "/IncentiveApiService/ep/incentive/punch_card_daily_records/"]: IncentiveApiService.GetPunchCardDailyRecords,
  [IncentiveApiService.GetMedalList.method +
  "/IncentiveApiService/ep/incentive/medal_list/"]: IncentiveApiService.GetMedalList,
  [IncentiveApiService.GetMedalInfo.method +
  "/IncentiveApiService/ep/incentive/medal_info/"]: IncentiveApiService.GetMedalInfo,
  [IncentiveApiService.SetNotification.method +
  "/IncentiveApiService/ep/incentive/set_notification/"]: IncentiveApiService.SetNotification,
  [IncentiveApiService.GenWechatToken.method +
  "/IncentiveApiService/ep/incentive/generate_wechat_token/"]: IncentiveApiService.GenWechatToken,
  [IncentiveApiService.GetLearnPlanInfo.method +
  "/IncentiveApiService/ep/incentive/learn_plan_info/"]: IncentiveApiService.GetLearnPlanInfo,
  [IncentiveApiService.RegisterLearnPlan.method +
  "/IncentiveApiService/ep/incentive/register_learn_plan/"]: IncentiveApiService.RegisterLearnPlan,
  [IncentiveApiService.GetLearnPlanDetail.method +
  "/IncentiveApiService/ep/incentive/learn_plan_detail/"]: IncentiveApiService.GetLearnPlanDetail,
  [IncentiveApiService.GetLearnTaskList.method +
  "/IncentiveApiService/ep/incentive/learn_task_list/"]: IncentiveApiService.GetLearnTaskList,
  [IncentiveApiService.StartLearnTask.method +
  "/IncentiveApiService/ep/incentive/start_learn_task/"]: IncentiveApiService.StartLearnTask,
  [IncentiveApiService.FinishLearnTask.method +
  "/IncentiveApiService/ep/incentive/finish_learn_task/"]: IncentiveApiService.FinishLearnTask,
};
