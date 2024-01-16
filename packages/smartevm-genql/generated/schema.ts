// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    timestamptz: any,
    uuid: any,
}


/** Table to store different categories for chatbots. */
export interface Category {
    categoryId: Scalars['Int']
    /** An array relationship */
    chatbots: ChatbotCategory[]
    /** An aggregate relationship */
    chatbotsAggregate: ChatbotCategoryAggregate
    name: Scalars['String']
    __typename: 'Category'
}


/** aggregated selection of "category" */
export interface CategoryAggregate {
    aggregate: (CategoryAggregateFields | null)
    nodes: Category[]
    __typename: 'CategoryAggregate'
}


/** aggregate fields of "category" */
export interface CategoryAggregateFields {
    avg: (CategoryAvgFields | null)
    count: Scalars['Int']
    max: (CategoryMaxFields | null)
    min: (CategoryMinFields | null)
    stddev: (CategoryStddevFields | null)
    stddevPop: (CategoryStddevPopFields | null)
    stddevSamp: (CategoryStddevSampFields | null)
    sum: (CategorySumFields | null)
    varPop: (CategoryVarPopFields | null)
    varSamp: (CategoryVarSampFields | null)
    variance: (CategoryVarianceFields | null)
    __typename: 'CategoryAggregateFields'
}


/** aggregate avg on columns */
export interface CategoryAvgFields {
    categoryId: (Scalars['Float'] | null)
    __typename: 'CategoryAvgFields'
}


/** unique or primary key constraints on table "category" */
export type CategoryConstraint = 'category_name_key' | 'category_pkey'


/** aggregate max on columns */
export interface CategoryMaxFields {
    categoryId: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    __typename: 'CategoryMaxFields'
}


/** aggregate min on columns */
export interface CategoryMinFields {
    categoryId: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    __typename: 'CategoryMinFields'
}


/** response of any mutation on the table "category" */
export interface CategoryMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Category[]
    __typename: 'CategoryMutationResponse'
}


/** select columns of table "category" */
export type CategorySelectColumn = 'categoryId' | 'name'


/** aggregate stddev on columns */
export interface CategoryStddevFields {
    categoryId: (Scalars['Float'] | null)
    __typename: 'CategoryStddevFields'
}


/** aggregate stddevPop on columns */
export interface CategoryStddevPopFields {
    categoryId: (Scalars['Float'] | null)
    __typename: 'CategoryStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface CategoryStddevSampFields {
    categoryId: (Scalars['Float'] | null)
    __typename: 'CategoryStddevSampFields'
}


/** aggregate sum on columns */
export interface CategorySumFields {
    categoryId: (Scalars['Int'] | null)
    __typename: 'CategorySumFields'
}


/** update columns of table "category" */
export type CategoryUpdateColumn = 'categoryId' | 'name'


/** aggregate varPop on columns */
export interface CategoryVarPopFields {
    categoryId: (Scalars['Float'] | null)
    __typename: 'CategoryVarPopFields'
}


/** aggregate varSamp on columns */
export interface CategoryVarSampFields {
    categoryId: (Scalars['Float'] | null)
    __typename: 'CategoryVarSampFields'
}


/** aggregate variance on columns */
export interface CategoryVarianceFields {
    categoryId: (Scalars['Float'] | null)
    __typename: 'CategoryVarianceFields'
}


/** Table to store links to GPT chat conversations and associate them with a specific GPT chatbot and the user who added the link. */
export interface Chat {
    addedBy: (Scalars['uuid'] | null)
    chatId: Scalars['Int']
    /** An object relationship */
    chatbot: Chatbot
    chatbotId: Scalars['Int']
    conversationLink: Scalars['String']
    /** An object relationship */
    user: (User | null)
    __typename: 'Chat'
}


/** aggregated selection of "chat" */
export interface ChatAggregate {
    aggregate: (ChatAggregateFields | null)
    nodes: Chat[]
    __typename: 'ChatAggregate'
}


/** aggregate fields of "chat" */
export interface ChatAggregateFields {
    avg: (ChatAvgFields | null)
    count: Scalars['Int']
    max: (ChatMaxFields | null)
    min: (ChatMinFields | null)
    stddev: (ChatStddevFields | null)
    stddevPop: (ChatStddevPopFields | null)
    stddevSamp: (ChatStddevSampFields | null)
    sum: (ChatSumFields | null)
    varPop: (ChatVarPopFields | null)
    varSamp: (ChatVarSampFields | null)
    variance: (ChatVarianceFields | null)
    __typename: 'ChatAggregateFields'
}


/** aggregate avg on columns */
export interface ChatAvgFields {
    chatId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatAvgFields'
}


/** unique or primary key constraints on table "chat" */
export type ChatConstraint = 'gpt_chat_conversation_link_key' | 'gpt_chat_pkey'


/** aggregate max on columns */
export interface ChatMaxFields {
    addedBy: (Scalars['uuid'] | null)
    chatId: (Scalars['Int'] | null)
    chatbotId: (Scalars['Int'] | null)
    conversationLink: (Scalars['String'] | null)
    __typename: 'ChatMaxFields'
}


/** aggregate min on columns */
export interface ChatMinFields {
    addedBy: (Scalars['uuid'] | null)
    chatId: (Scalars['Int'] | null)
    chatbotId: (Scalars['Int'] | null)
    conversationLink: (Scalars['String'] | null)
    __typename: 'ChatMinFields'
}


/** response of any mutation on the table "chat" */
export interface ChatMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Chat[]
    __typename: 'ChatMutationResponse'
}


/** select columns of table "chat" */
export type ChatSelectColumn = 'addedBy' | 'chatId' | 'chatbotId' | 'conversationLink'


/** aggregate stddev on columns */
export interface ChatStddevFields {
    chatId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatStddevFields'
}


/** aggregate stddevPop on columns */
export interface ChatStddevPopFields {
    chatId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface ChatStddevSampFields {
    chatId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatStddevSampFields'
}


/** aggregate sum on columns */
export interface ChatSumFields {
    chatId: (Scalars['Int'] | null)
    chatbotId: (Scalars['Int'] | null)
    __typename: 'ChatSumFields'
}


/** update columns of table "chat" */
export type ChatUpdateColumn = 'addedBy' | 'chatId' | 'chatbotId' | 'conversationLink'


/** aggregate varPop on columns */
export interface ChatVarPopFields {
    chatId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatVarPopFields'
}


/** aggregate varSamp on columns */
export interface ChatVarSampFields {
    chatId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatVarSampFields'
}


/** aggregate variance on columns */
export interface ChatVarianceFields {
    chatId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatVarianceFields'
}


/** Table storing information about chatbots, their characteristics, and default settings. */
export interface Chatbot {
    avatar: (Scalars['String'] | null)
    /** An array relationship */
    categories: ChatbotCategory[]
    /** An aggregate relationship */
    categoriesAggregate: ChatbotCategoryAggregate
    chatbotId: Scalars['Int']
    /** An array relationship */
    chats: Chat[]
    /** An aggregate relationship */
    chatsAggregate: ChatAggregate
    createdBy: Scalars['String']
    defaultComplexity: Scalars['String']
    defaultLength: Scalars['String']
    defaultTone: Scalars['String']
    defaultType: Scalars['String']
    description: (Scalars['String'] | null)
    name: Scalars['String']
    /** An array relationship */
    preferences: Preference[]
    /** An aggregate relationship */
    preferencesAggregate: PreferenceAggregate
    /** An array relationship */
    prompts: PromptChatbot[]
    /** An aggregate relationship */
    promptsAggregate: PromptChatbotAggregate
    /** An array relationship */
    threads: Thread[]
    /** An aggregate relationship */
    threadsAggregate: ThreadAggregate
    __typename: 'Chatbot'
}


/** aggregated selection of "chatbot" */
export interface ChatbotAggregate {
    aggregate: (ChatbotAggregateFields | null)
    nodes: Chatbot[]
    __typename: 'ChatbotAggregate'
}


/** aggregate fields of "chatbot" */
export interface ChatbotAggregateFields {
    avg: (ChatbotAvgFields | null)
    count: Scalars['Int']
    max: (ChatbotMaxFields | null)
    min: (ChatbotMinFields | null)
    stddev: (ChatbotStddevFields | null)
    stddevPop: (ChatbotStddevPopFields | null)
    stddevSamp: (ChatbotStddevSampFields | null)
    sum: (ChatbotSumFields | null)
    varPop: (ChatbotVarPopFields | null)
    varSamp: (ChatbotVarSampFields | null)
    variance: (ChatbotVarianceFields | null)
    __typename: 'ChatbotAggregateFields'
}


/** aggregate avg on columns */
export interface ChatbotAvgFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotAvgFields'
}


/** Junction table to manage the many-to-many relationships between chatbots and their categories. */
export interface ChatbotCategory {
    /** An object relationship */
    category: Category
    categoryId: Scalars['Int']
    /** An object relationship */
    chatbot: Chatbot
    chatbotId: Scalars['Int']
    __typename: 'ChatbotCategory'
}


/** aggregated selection of "chatbot_category" */
export interface ChatbotCategoryAggregate {
    aggregate: (ChatbotCategoryAggregateFields | null)
    nodes: ChatbotCategory[]
    __typename: 'ChatbotCategoryAggregate'
}


/** aggregate fields of "chatbot_category" */
export interface ChatbotCategoryAggregateFields {
    avg: (ChatbotCategoryAvgFields | null)
    count: Scalars['Int']
    max: (ChatbotCategoryMaxFields | null)
    min: (ChatbotCategoryMinFields | null)
    stddev: (ChatbotCategoryStddevFields | null)
    stddevPop: (ChatbotCategoryStddevPopFields | null)
    stddevSamp: (ChatbotCategoryStddevSampFields | null)
    sum: (ChatbotCategorySumFields | null)
    varPop: (ChatbotCategoryVarPopFields | null)
    varSamp: (ChatbotCategoryVarSampFields | null)
    variance: (ChatbotCategoryVarianceFields | null)
    __typename: 'ChatbotCategoryAggregateFields'
}


/** aggregate avg on columns */
export interface ChatbotCategoryAvgFields {
    categoryId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotCategoryAvgFields'
}


/** unique or primary key constraints on table "chatbot_category" */
export type ChatbotCategoryConstraint = 'chatbot_category_pkey'


/** aggregate max on columns */
export interface ChatbotCategoryMaxFields {
    categoryId: (Scalars['Int'] | null)
    chatbotId: (Scalars['Int'] | null)
    __typename: 'ChatbotCategoryMaxFields'
}


/** aggregate min on columns */
export interface ChatbotCategoryMinFields {
    categoryId: (Scalars['Int'] | null)
    chatbotId: (Scalars['Int'] | null)
    __typename: 'ChatbotCategoryMinFields'
}


/** response of any mutation on the table "chatbot_category" */
export interface ChatbotCategoryMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: ChatbotCategory[]
    __typename: 'ChatbotCategoryMutationResponse'
}


/** select columns of table "chatbot_category" */
export type ChatbotCategorySelectColumn = 'categoryId' | 'chatbotId'


/** aggregate stddev on columns */
export interface ChatbotCategoryStddevFields {
    categoryId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotCategoryStddevFields'
}


/** aggregate stddevPop on columns */
export interface ChatbotCategoryStddevPopFields {
    categoryId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotCategoryStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface ChatbotCategoryStddevSampFields {
    categoryId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotCategoryStddevSampFields'
}


/** aggregate sum on columns */
export interface ChatbotCategorySumFields {
    categoryId: (Scalars['Int'] | null)
    chatbotId: (Scalars['Int'] | null)
    __typename: 'ChatbotCategorySumFields'
}


/** update columns of table "chatbot_category" */
export type ChatbotCategoryUpdateColumn = 'categoryId' | 'chatbotId'


/** aggregate varPop on columns */
export interface ChatbotCategoryVarPopFields {
    categoryId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotCategoryVarPopFields'
}


/** aggregate varSamp on columns */
export interface ChatbotCategoryVarSampFields {
    categoryId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotCategoryVarSampFields'
}


/** aggregate variance on columns */
export interface ChatbotCategoryVarianceFields {
    categoryId: (Scalars['Float'] | null)
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotCategoryVarianceFields'
}


/** unique or primary key constraints on table "chatbot" */
export type ChatbotConstraint = 'chatbot_name_key' | 'chatbot_pkey'


/** aggregate max on columns */
export interface ChatbotMaxFields {
    avatar: (Scalars['String'] | null)
    chatbotId: (Scalars['Int'] | null)
    createdBy: (Scalars['String'] | null)
    defaultComplexity: (Scalars['String'] | null)
    defaultLength: (Scalars['String'] | null)
    defaultTone: (Scalars['String'] | null)
    defaultType: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    __typename: 'ChatbotMaxFields'
}


/** aggregate min on columns */
export interface ChatbotMinFields {
    avatar: (Scalars['String'] | null)
    chatbotId: (Scalars['Int'] | null)
    createdBy: (Scalars['String'] | null)
    defaultComplexity: (Scalars['String'] | null)
    defaultLength: (Scalars['String'] | null)
    defaultTone: (Scalars['String'] | null)
    defaultType: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    __typename: 'ChatbotMinFields'
}


/** response of any mutation on the table "chatbot" */
export interface ChatbotMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Chatbot[]
    __typename: 'ChatbotMutationResponse'
}


/** select columns of table "chatbot" */
export type ChatbotSelectColumn = 'avatar' | 'chatbotId' | 'createdBy' | 'defaultComplexity' | 'defaultLength' | 'defaultTone' | 'defaultType' | 'description' | 'name'


/** aggregate stddev on columns */
export interface ChatbotStddevFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotStddevFields'
}


/** aggregate stddevPop on columns */
export interface ChatbotStddevPopFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface ChatbotStddevSampFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotStddevSampFields'
}


/** aggregate sum on columns */
export interface ChatbotSumFields {
    chatbotId: (Scalars['Int'] | null)
    __typename: 'ChatbotSumFields'
}


/** update columns of table "chatbot" */
export type ChatbotUpdateColumn = 'avatar' | 'chatbotId' | 'createdBy' | 'defaultComplexity' | 'defaultLength' | 'defaultTone' | 'defaultType' | 'description' | 'name'


/** aggregate varPop on columns */
export interface ChatbotVarPopFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotVarPopFields'
}


/** aggregate varSamp on columns */
export interface ChatbotVarSampFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotVarSampFields'
}


/** aggregate variance on columns */
export interface ChatbotVarianceFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ChatbotVarianceFields'
}


/** columns and relationships of "complexity_enum" */
export interface ComplexityEnum {
    value: Scalars['String']
    __typename: 'ComplexityEnum'
}


/** aggregated selection of "complexity_enum" */
export interface ComplexityEnumAggregate {
    aggregate: (ComplexityEnumAggregateFields | null)
    nodes: ComplexityEnum[]
    __typename: 'ComplexityEnumAggregate'
}


/** aggregate fields of "complexity_enum" */
export interface ComplexityEnumAggregateFields {
    count: Scalars['Int']
    max: (ComplexityEnumMaxFields | null)
    min: (ComplexityEnumMinFields | null)
    __typename: 'ComplexityEnumAggregateFields'
}


/** unique or primary key constraints on table "complexity_enum" */
export type ComplexityEnumConstraint = 'default_complexity_enum_pkey'


/** aggregate max on columns */
export interface ComplexityEnumMaxFields {
    value: (Scalars['String'] | null)
    __typename: 'ComplexityEnumMaxFields'
}


/** aggregate min on columns */
export interface ComplexityEnumMinFields {
    value: (Scalars['String'] | null)
    __typename: 'ComplexityEnumMinFields'
}


/** response of any mutation on the table "complexity_enum" */
export interface ComplexityEnumMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: ComplexityEnum[]
    __typename: 'ComplexityEnumMutationResponse'
}


/** select columns of table "complexity_enum" */
export type ComplexityEnumSelectColumn = 'value'


/** update columns of table "complexity_enum" */
export type ComplexityEnumUpdateColumn = 'value'


/** ordering argument of a cursor */
export type CursorOrdering = 'ASC' | 'DESC'


/** columns and relationships of "length_enum" */
export interface LengthEnum {
    value: Scalars['String']
    __typename: 'LengthEnum'
}


/** aggregated selection of "length_enum" */
export interface LengthEnumAggregate {
    aggregate: (LengthEnumAggregateFields | null)
    nodes: LengthEnum[]
    __typename: 'LengthEnumAggregate'
}


/** aggregate fields of "length_enum" */
export interface LengthEnumAggregateFields {
    count: Scalars['Int']
    max: (LengthEnumMaxFields | null)
    min: (LengthEnumMinFields | null)
    __typename: 'LengthEnumAggregateFields'
}


/** unique or primary key constraints on table "length_enum" */
export type LengthEnumConstraint = 'default_length_enum_pkey'


/** aggregate max on columns */
export interface LengthEnumMaxFields {
    value: (Scalars['String'] | null)
    __typename: 'LengthEnumMaxFields'
}


/** aggregate min on columns */
export interface LengthEnumMinFields {
    value: (Scalars['String'] | null)
    __typename: 'LengthEnumMinFields'
}


/** response of any mutation on the table "length_enum" */
export interface LengthEnumMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: LengthEnum[]
    __typename: 'LengthEnumMutationResponse'
}


/** select columns of table "length_enum" */
export type LengthEnumSelectColumn = 'value'


/** update columns of table "length_enum" */
export type LengthEnumUpdateColumn = 'value'


/** This table stores the messages exchanged between users and chatbots. */
export interface Message {
    content: Scalars['String']
    createdAt: Scalars['timestamptz']
    messageId: Scalars['uuid']
    role: Scalars['String']
    /** An object relationship */
    thread: (Thread | null)
    threadId: (Scalars['uuid'] | null)
    __typename: 'Message'
}


/** aggregated selection of "message" */
export interface MessageAggregate {
    aggregate: (MessageAggregateFields | null)
    nodes: Message[]
    __typename: 'MessageAggregate'
}


/** aggregate fields of "message" */
export interface MessageAggregateFields {
    count: Scalars['Int']
    max: (MessageMaxFields | null)
    min: (MessageMinFields | null)
    __typename: 'MessageAggregateFields'
}


/** unique or primary key constraints on table "message" */
export type MessageConstraint = 'message_id_key' | 'message_pkey'


/** aggregate max on columns */
export interface MessageMaxFields {
    content: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    messageId: (Scalars['uuid'] | null)
    role: (Scalars['String'] | null)
    threadId: (Scalars['uuid'] | null)
    __typename: 'MessageMaxFields'
}


/** aggregate min on columns */
export interface MessageMinFields {
    content: (Scalars['String'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    messageId: (Scalars['uuid'] | null)
    role: (Scalars['String'] | null)
    threadId: (Scalars['uuid'] | null)
    __typename: 'MessageMinFields'
}


/** response of any mutation on the table "message" */
export interface MessageMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Message[]
    __typename: 'MessageMutationResponse'
}


/** select columns of table "message" */
export type MessageSelectColumn = 'content' | 'createdAt' | 'messageId' | 'role' | 'threadId'


/** columns and relationships of "message_type_enum" */
export interface MessageTypeEnum {
    value: Scalars['String']
    __typename: 'MessageTypeEnum'
}


/** aggregated selection of "message_type_enum" */
export interface MessageTypeEnumAggregate {
    aggregate: (MessageTypeEnumAggregateFields | null)
    nodes: MessageTypeEnum[]
    __typename: 'MessageTypeEnumAggregate'
}


/** aggregate fields of "message_type_enum" */
export interface MessageTypeEnumAggregateFields {
    count: Scalars['Int']
    max: (MessageTypeEnumMaxFields | null)
    min: (MessageTypeEnumMinFields | null)
    __typename: 'MessageTypeEnumAggregateFields'
}


/** unique or primary key constraints on table "message_type_enum" */
export type MessageTypeEnumConstraint = 'message_type_enum_pkey'


/** aggregate max on columns */
export interface MessageTypeEnumMaxFields {
    value: (Scalars['String'] | null)
    __typename: 'MessageTypeEnumMaxFields'
}


/** aggregate min on columns */
export interface MessageTypeEnumMinFields {
    value: (Scalars['String'] | null)
    __typename: 'MessageTypeEnumMinFields'
}


/** response of any mutation on the table "message_type_enum" */
export interface MessageTypeEnumMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: MessageTypeEnum[]
    __typename: 'MessageTypeEnumMutationResponse'
}


/** select columns of table "message_type_enum" */
export type MessageTypeEnumSelectColumn = 'value'


/** update columns of table "message_type_enum" */
export type MessageTypeEnumUpdateColumn = 'value'


/** update columns of table "message" */
export type MessageUpdateColumn = 'content' | 'createdAt' | 'messageId' | 'role' | 'threadId'


/** column ordering options */
export type OrderBy = 'ASC' | 'ASC_NULLS_FIRST' | 'ASC_NULLS_LAST' | 'DESC' | 'DESC_NULLS_FIRST' | 'DESC_NULLS_LAST'


/** This table stores user-specific preferences for quick access when they interact with a chatbot. */
export interface Preference {
    /** An object relationship */
    chatbot: Chatbot
    chatbotId: Scalars['Int']
    favorite: (Scalars['Boolean'] | null)
    preferenceId: Scalars['Int']
    preferredComplexity: Scalars['String']
    preferredLength: Scalars['String']
    preferredTone: Scalars['String']
    preferredType: Scalars['String']
    userId: (Scalars['uuid'] | null)
    __typename: 'Preference'
}


/** aggregated selection of "preference" */
export interface PreferenceAggregate {
    aggregate: (PreferenceAggregateFields | null)
    nodes: Preference[]
    __typename: 'PreferenceAggregate'
}


/** aggregate fields of "preference" */
export interface PreferenceAggregateFields {
    avg: (PreferenceAvgFields | null)
    count: Scalars['Int']
    max: (PreferenceMaxFields | null)
    min: (PreferenceMinFields | null)
    stddev: (PreferenceStddevFields | null)
    stddevPop: (PreferenceStddevPopFields | null)
    stddevSamp: (PreferenceStddevSampFields | null)
    sum: (PreferenceSumFields | null)
    varPop: (PreferenceVarPopFields | null)
    varSamp: (PreferenceVarSampFields | null)
    variance: (PreferenceVarianceFields | null)
    __typename: 'PreferenceAggregateFields'
}


/** aggregate avg on columns */
export interface PreferenceAvgFields {
    chatbotId: (Scalars['Float'] | null)
    preferenceId: (Scalars['Float'] | null)
    __typename: 'PreferenceAvgFields'
}


/** unique or primary key constraints on table "preference" */
export type PreferenceConstraint = 'user_chatbot_preference_pkey'


/** aggregate max on columns */
export interface PreferenceMaxFields {
    chatbotId: (Scalars['Int'] | null)
    preferenceId: (Scalars['Int'] | null)
    preferredComplexity: (Scalars['String'] | null)
    preferredLength: (Scalars['String'] | null)
    preferredTone: (Scalars['String'] | null)
    preferredType: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'PreferenceMaxFields'
}


/** aggregate min on columns */
export interface PreferenceMinFields {
    chatbotId: (Scalars['Int'] | null)
    preferenceId: (Scalars['Int'] | null)
    preferredComplexity: (Scalars['String'] | null)
    preferredLength: (Scalars['String'] | null)
    preferredTone: (Scalars['String'] | null)
    preferredType: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'PreferenceMinFields'
}


/** response of any mutation on the table "preference" */
export interface PreferenceMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Preference[]
    __typename: 'PreferenceMutationResponse'
}


/** select columns of table "preference" */
export type PreferenceSelectColumn = 'chatbotId' | 'favorite' | 'preferenceId' | 'preferredComplexity' | 'preferredLength' | 'preferredTone' | 'preferredType' | 'userId'


/** select "preferenceAggregateBoolExpBool_andArgumentsColumns" columns of table "preference" */
export type PreferenceSelectColumnPreferenceAggregateBoolExpBool_andArgumentsColumns = 'favorite'


/** select "preferenceAggregateBoolExpBool_orArgumentsColumns" columns of table "preference" */
export type PreferenceSelectColumnPreferenceAggregateBoolExpBool_orArgumentsColumns = 'favorite'


/** aggregate stddev on columns */
export interface PreferenceStddevFields {
    chatbotId: (Scalars['Float'] | null)
    preferenceId: (Scalars['Float'] | null)
    __typename: 'PreferenceStddevFields'
}


/** aggregate stddevPop on columns */
export interface PreferenceStddevPopFields {
    chatbotId: (Scalars['Float'] | null)
    preferenceId: (Scalars['Float'] | null)
    __typename: 'PreferenceStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface PreferenceStddevSampFields {
    chatbotId: (Scalars['Float'] | null)
    preferenceId: (Scalars['Float'] | null)
    __typename: 'PreferenceStddevSampFields'
}


/** aggregate sum on columns */
export interface PreferenceSumFields {
    chatbotId: (Scalars['Int'] | null)
    preferenceId: (Scalars['Int'] | null)
    __typename: 'PreferenceSumFields'
}


/** update columns of table "preference" */
export type PreferenceUpdateColumn = 'chatbotId' | 'favorite' | 'preferenceId' | 'preferredComplexity' | 'preferredLength' | 'preferredTone' | 'preferredType' | 'userId'


/** aggregate varPop on columns */
export interface PreferenceVarPopFields {
    chatbotId: (Scalars['Float'] | null)
    preferenceId: (Scalars['Float'] | null)
    __typename: 'PreferenceVarPopFields'
}


/** aggregate varSamp on columns */
export interface PreferenceVarSampFields {
    chatbotId: (Scalars['Float'] | null)
    preferenceId: (Scalars['Float'] | null)
    __typename: 'PreferenceVarSampFields'
}


/** aggregate variance on columns */
export interface PreferenceVarianceFields {
    chatbotId: (Scalars['Float'] | null)
    preferenceId: (Scalars['Float'] | null)
    __typename: 'PreferenceVarianceFields'
}


/** columns and relationships of "prompt" */
export interface Prompt {
    /** An array relationship */
    chatbots: PromptChatbot[]
    /** An aggregate relationship */
    chatbotsAggregate: PromptChatbotAggregate
    content: Scalars['String']
    promptId: Scalars['Int']
    promptName: (Scalars['String'] | null)
    type: Scalars['String']
    __typename: 'Prompt'
}


/** aggregated selection of "prompt" */
export interface PromptAggregate {
    aggregate: (PromptAggregateFields | null)
    nodes: Prompt[]
    __typename: 'PromptAggregate'
}


/** aggregate fields of "prompt" */
export interface PromptAggregateFields {
    avg: (PromptAvgFields | null)
    count: Scalars['Int']
    max: (PromptMaxFields | null)
    min: (PromptMinFields | null)
    stddev: (PromptStddevFields | null)
    stddevPop: (PromptStddevPopFields | null)
    stddevSamp: (PromptStddevSampFields | null)
    sum: (PromptSumFields | null)
    varPop: (PromptVarPopFields | null)
    varSamp: (PromptVarSampFields | null)
    variance: (PromptVarianceFields | null)
    __typename: 'PromptAggregateFields'
}


/** aggregate avg on columns */
export interface PromptAvgFields {
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptAvgFields'
}


/** Junction table for prompts/instructions and chatbots. */
export interface PromptChatbot {
    chabotId: Scalars['Int']
    /** An object relationship */
    chatbot: Chatbot
    /** An object relationship */
    prompt: Prompt
    promptId: Scalars['Int']
    __typename: 'PromptChatbot'
}


/** aggregated selection of "prompt_chatbot" */
export interface PromptChatbotAggregate {
    aggregate: (PromptChatbotAggregateFields | null)
    nodes: PromptChatbot[]
    __typename: 'PromptChatbotAggregate'
}


/** aggregate fields of "prompt_chatbot" */
export interface PromptChatbotAggregateFields {
    avg: (PromptChatbotAvgFields | null)
    count: Scalars['Int']
    max: (PromptChatbotMaxFields | null)
    min: (PromptChatbotMinFields | null)
    stddev: (PromptChatbotStddevFields | null)
    stddevPop: (PromptChatbotStddevPopFields | null)
    stddevSamp: (PromptChatbotStddevSampFields | null)
    sum: (PromptChatbotSumFields | null)
    varPop: (PromptChatbotVarPopFields | null)
    varSamp: (PromptChatbotVarSampFields | null)
    variance: (PromptChatbotVarianceFields | null)
    __typename: 'PromptChatbotAggregateFields'
}


/** aggregate avg on columns */
export interface PromptChatbotAvgFields {
    chabotId: (Scalars['Float'] | null)
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptChatbotAvgFields'
}


/** unique or primary key constraints on table "prompt_chatbot" */
export type PromptChatbotConstraint = 'prompt_chatbot_pkey'


/** aggregate max on columns */
export interface PromptChatbotMaxFields {
    chabotId: (Scalars['Int'] | null)
    promptId: (Scalars['Int'] | null)
    __typename: 'PromptChatbotMaxFields'
}


/** aggregate min on columns */
export interface PromptChatbotMinFields {
    chabotId: (Scalars['Int'] | null)
    promptId: (Scalars['Int'] | null)
    __typename: 'PromptChatbotMinFields'
}


/** response of any mutation on the table "prompt_chatbot" */
export interface PromptChatbotMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: PromptChatbot[]
    __typename: 'PromptChatbotMutationResponse'
}


/** select columns of table "prompt_chatbot" */
export type PromptChatbotSelectColumn = 'chabotId' | 'promptId'


/** aggregate stddev on columns */
export interface PromptChatbotStddevFields {
    chabotId: (Scalars['Float'] | null)
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptChatbotStddevFields'
}


/** aggregate stddevPop on columns */
export interface PromptChatbotStddevPopFields {
    chabotId: (Scalars['Float'] | null)
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptChatbotStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface PromptChatbotStddevSampFields {
    chabotId: (Scalars['Float'] | null)
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptChatbotStddevSampFields'
}


/** aggregate sum on columns */
export interface PromptChatbotSumFields {
    chabotId: (Scalars['Int'] | null)
    promptId: (Scalars['Int'] | null)
    __typename: 'PromptChatbotSumFields'
}


/** update columns of table "prompt_chatbot" */
export type PromptChatbotUpdateColumn = 'chabotId' | 'promptId'


/** aggregate varPop on columns */
export interface PromptChatbotVarPopFields {
    chabotId: (Scalars['Float'] | null)
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptChatbotVarPopFields'
}


/** aggregate varSamp on columns */
export interface PromptChatbotVarSampFields {
    chabotId: (Scalars['Float'] | null)
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptChatbotVarSampFields'
}


/** aggregate variance on columns */
export interface PromptChatbotVarianceFields {
    chabotId: (Scalars['Float'] | null)
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptChatbotVarianceFields'
}


/** unique or primary key constraints on table "prompt" */
export type PromptConstraint = 'prompt_pkey' | 'prompt_prompt_id_key'


/** aggregate max on columns */
export interface PromptMaxFields {
    content: (Scalars['String'] | null)
    promptId: (Scalars['Int'] | null)
    promptName: (Scalars['String'] | null)
    type: (Scalars['String'] | null)
    __typename: 'PromptMaxFields'
}


/** aggregate min on columns */
export interface PromptMinFields {
    content: (Scalars['String'] | null)
    promptId: (Scalars['Int'] | null)
    promptName: (Scalars['String'] | null)
    type: (Scalars['String'] | null)
    __typename: 'PromptMinFields'
}


/** response of any mutation on the table "prompt" */
export interface PromptMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Prompt[]
    __typename: 'PromptMutationResponse'
}


/** select columns of table "prompt" */
export type PromptSelectColumn = 'content' | 'promptId' | 'promptName' | 'type'


/** aggregate stddev on columns */
export interface PromptStddevFields {
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptStddevFields'
}


/** aggregate stddevPop on columns */
export interface PromptStddevPopFields {
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface PromptStddevSampFields {
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptStddevSampFields'
}


/** aggregate sum on columns */
export interface PromptSumFields {
    promptId: (Scalars['Int'] | null)
    __typename: 'PromptSumFields'
}


/** columns and relationships of "prompt_type_enum" */
export interface PromptTypeEnum {
    /** An array relationship */
    prompts: Prompt[]
    /** An aggregate relationship */
    promptsAggregate: PromptAggregate
    value: Scalars['String']
    __typename: 'PromptTypeEnum'
}


/** aggregated selection of "prompt_type_enum" */
export interface PromptTypeEnumAggregate {
    aggregate: (PromptTypeEnumAggregateFields | null)
    nodes: PromptTypeEnum[]
    __typename: 'PromptTypeEnumAggregate'
}


/** aggregate fields of "prompt_type_enum" */
export interface PromptTypeEnumAggregateFields {
    count: Scalars['Int']
    max: (PromptTypeEnumMaxFields | null)
    min: (PromptTypeEnumMinFields | null)
    __typename: 'PromptTypeEnumAggregateFields'
}


/** unique or primary key constraints on table "prompt_type_enum" */
export type PromptTypeEnumConstraint = 'type_enum_pkey'


/** aggregate max on columns */
export interface PromptTypeEnumMaxFields {
    value: (Scalars['String'] | null)
    __typename: 'PromptTypeEnumMaxFields'
}


/** aggregate min on columns */
export interface PromptTypeEnumMinFields {
    value: (Scalars['String'] | null)
    __typename: 'PromptTypeEnumMinFields'
}


/** response of any mutation on the table "prompt_type_enum" */
export interface PromptTypeEnumMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: PromptTypeEnum[]
    __typename: 'PromptTypeEnumMutationResponse'
}


/** select columns of table "prompt_type_enum" */
export type PromptTypeEnumSelectColumn = 'value'


/** update columns of table "prompt_type_enum" */
export type PromptTypeEnumUpdateColumn = 'value'


/** update columns of table "prompt" */
export type PromptUpdateColumn = 'content' | 'promptId' | 'promptName' | 'type'


/** aggregate varPop on columns */
export interface PromptVarPopFields {
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptVarPopFields'
}


/** aggregate varSamp on columns */
export interface PromptVarSampFields {
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptVarSampFields'
}


/** aggregate variance on columns */
export interface PromptVarianceFields {
    promptId: (Scalars['Float'] | null)
    __typename: 'PromptVarianceFields'
}


/** columns and relationships of "thread" */
export interface Thread {
    /** An object relationship */
    chatbot: Chatbot
    chatbotId: Scalars['Int']
    createdAt: Scalars['timestamptz']
    /** An array relationship */
    messages: Message[]
    /** An aggregate relationship */
    messagesAggregate: MessageAggregate
    threadId: Scalars['uuid']
    updatedAt: Scalars['timestamptz']
    /** An object relationship */
    user: (User | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'Thread'
}


/** aggregated selection of "thread" */
export interface ThreadAggregate {
    aggregate: (ThreadAggregateFields | null)
    nodes: Thread[]
    __typename: 'ThreadAggregate'
}


/** aggregate fields of "thread" */
export interface ThreadAggregateFields {
    avg: (ThreadAvgFields | null)
    count: Scalars['Int']
    max: (ThreadMaxFields | null)
    min: (ThreadMinFields | null)
    stddev: (ThreadStddevFields | null)
    stddevPop: (ThreadStddevPopFields | null)
    stddevSamp: (ThreadStddevSampFields | null)
    sum: (ThreadSumFields | null)
    varPop: (ThreadVarPopFields | null)
    varSamp: (ThreadVarSampFields | null)
    variance: (ThreadVarianceFields | null)
    __typename: 'ThreadAggregateFields'
}


/** aggregate avg on columns */
export interface ThreadAvgFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ThreadAvgFields'
}


/** unique or primary key constraints on table "thread" */
export type ThreadConstraint = 'thread_id_key' | 'thread_pkey'


/** aggregate max on columns */
export interface ThreadMaxFields {
    chatbotId: (Scalars['Int'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    threadId: (Scalars['uuid'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'ThreadMaxFields'
}


/** aggregate min on columns */
export interface ThreadMinFields {
    chatbotId: (Scalars['Int'] | null)
    createdAt: (Scalars['timestamptz'] | null)
    threadId: (Scalars['uuid'] | null)
    updatedAt: (Scalars['timestamptz'] | null)
    userId: (Scalars['uuid'] | null)
    __typename: 'ThreadMinFields'
}


/** response of any mutation on the table "thread" */
export interface ThreadMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Thread[]
    __typename: 'ThreadMutationResponse'
}


/** select columns of table "thread" */
export type ThreadSelectColumn = 'chatbotId' | 'createdAt' | 'threadId' | 'updatedAt' | 'userId'


/** aggregate stddev on columns */
export interface ThreadStddevFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ThreadStddevFields'
}


/** aggregate stddevPop on columns */
export interface ThreadStddevPopFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ThreadStddevPopFields'
}


/** aggregate stddevSamp on columns */
export interface ThreadStddevSampFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ThreadStddevSampFields'
}


/** aggregate sum on columns */
export interface ThreadSumFields {
    chatbotId: (Scalars['Int'] | null)
    __typename: 'ThreadSumFields'
}


/** update columns of table "thread" */
export type ThreadUpdateColumn = 'chatbotId' | 'createdAt' | 'threadId' | 'updatedAt' | 'userId'


/** aggregate varPop on columns */
export interface ThreadVarPopFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ThreadVarPopFields'
}


/** aggregate varSamp on columns */
export interface ThreadVarSampFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ThreadVarSampFields'
}


/** aggregate variance on columns */
export interface ThreadVarianceFields {
    chatbotId: (Scalars['Float'] | null)
    __typename: 'ThreadVarianceFields'
}


/** columns and relationships of "tone_enum" */
export interface ToneEnum {
    value: Scalars['String']
    __typename: 'ToneEnum'
}


/** aggregated selection of "tone_enum" */
export interface ToneEnumAggregate {
    aggregate: (ToneEnumAggregateFields | null)
    nodes: ToneEnum[]
    __typename: 'ToneEnumAggregate'
}


/** aggregate fields of "tone_enum" */
export interface ToneEnumAggregateFields {
    count: Scalars['Int']
    max: (ToneEnumMaxFields | null)
    min: (ToneEnumMinFields | null)
    __typename: 'ToneEnumAggregateFields'
}


/** unique or primary key constraints on table "tone_enum" */
export type ToneEnumConstraint = 'default_tone_enum_pkey'


/** aggregate max on columns */
export interface ToneEnumMaxFields {
    value: (Scalars['String'] | null)
    __typename: 'ToneEnumMaxFields'
}


/** aggregate min on columns */
export interface ToneEnumMinFields {
    value: (Scalars['String'] | null)
    __typename: 'ToneEnumMinFields'
}


/** response of any mutation on the table "tone_enum" */
export interface ToneEnumMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: ToneEnum[]
    __typename: 'ToneEnumMutationResponse'
}


/** select columns of table "tone_enum" */
export type ToneEnumSelectColumn = 'value'


/** update columns of table "tone_enum" */
export type ToneEnumUpdateColumn = 'value'


/** columns and relationships of "type_enum" */
export interface TypeEnum {
    value: Scalars['String']
    __typename: 'TypeEnum'
}


/** aggregated selection of "type_enum" */
export interface TypeEnumAggregate {
    aggregate: (TypeEnumAggregateFields | null)
    nodes: TypeEnum[]
    __typename: 'TypeEnumAggregate'
}


/** aggregate fields of "type_enum" */
export interface TypeEnumAggregateFields {
    count: Scalars['Int']
    max: (TypeEnumMaxFields | null)
    min: (TypeEnumMinFields | null)
    __typename: 'TypeEnumAggregateFields'
}


/** unique or primary key constraints on table "type_enum" */
export type TypeEnumConstraint = 'default_type_enum_pkey'


/** aggregate max on columns */
export interface TypeEnumMaxFields {
    value: (Scalars['String'] | null)
    __typename: 'TypeEnumMaxFields'
}


/** aggregate min on columns */
export interface TypeEnumMinFields {
    value: (Scalars['String'] | null)
    __typename: 'TypeEnumMinFields'
}


/** response of any mutation on the table "type_enum" */
export interface TypeEnumMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: TypeEnum[]
    __typename: 'TypeEnumMutationResponse'
}


/** select columns of table "type_enum" */
export type TypeEnumSelectColumn = 'value'


/** update columns of table "type_enum" */
export type TypeEnumUpdateColumn = 'value'


/** Table storing information about registered users. */
export interface User {
    /** An array relationship */
    chats: Chat[]
    /** An aggregate relationship */
    chatsAggregate: ChatAggregate
    dateJoined: Scalars['timestamptz']
    email: Scalars['String']
    lastLogin: (Scalars['timestamptz'] | null)
    password: Scalars['String']
    /** An array relationship */
    preferences: Preference[]
    /** An aggregate relationship */
    preferencesAggregate: PreferenceAggregate
    profilePicture: (Scalars['String'] | null)
    /** An array relationship */
    threads: Thread[]
    /** An aggregate relationship */
    threadsAggregate: ThreadAggregate
    userId: Scalars['uuid']
    username: Scalars['String']
    __typename: 'User'
}


/** aggregated selection of "user" */
export interface UserAggregate {
    aggregate: (UserAggregateFields | null)
    nodes: User[]
    __typename: 'UserAggregate'
}


/** aggregate fields of "user" */
export interface UserAggregateFields {
    count: Scalars['Int']
    max: (UserMaxFields | null)
    min: (UserMinFields | null)
    __typename: 'UserAggregateFields'
}


/** unique or primary key constraints on table "user" */
export type UserConstraint = 'user_email_key' | 'user_pkey' | 'user_username_key'


/** aggregate max on columns */
export interface UserMaxFields {
    dateJoined: (Scalars['timestamptz'] | null)
    email: (Scalars['String'] | null)
    lastLogin: (Scalars['timestamptz'] | null)
    password: (Scalars['String'] | null)
    profilePicture: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    username: (Scalars['String'] | null)
    __typename: 'UserMaxFields'
}


/** aggregate min on columns */
export interface UserMinFields {
    dateJoined: (Scalars['timestamptz'] | null)
    email: (Scalars['String'] | null)
    lastLogin: (Scalars['timestamptz'] | null)
    password: (Scalars['String'] | null)
    profilePicture: (Scalars['String'] | null)
    userId: (Scalars['uuid'] | null)
    username: (Scalars['String'] | null)
    __typename: 'UserMinFields'
}


/** response of any mutation on the table "user" */
export interface UserMutationResponse {
    /** number of rows affected by the mutation */
    affectedRows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: User[]
    __typename: 'UserMutationResponse'
}


/** select columns of table "user" */
export type UserSelectColumn = 'dateJoined' | 'email' | 'lastLogin' | 'password' | 'profilePicture' | 'userId' | 'username'


/** update columns of table "user" */
export type UserUpdateColumn = 'dateJoined' | 'email' | 'lastLogin' | 'password' | 'profilePicture' | 'userId' | 'username'


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "category" */
    deleteCategory: (CategoryMutationResponse | null)
    /** delete single row from the table: "category" */
    deleteCategoryByPk: (Category | null)
    /** delete data from the table: "chat" */
    deleteChat: (ChatMutationResponse | null)
    /** delete single row from the table: "chat" */
    deleteChatByPk: (Chat | null)
    /** delete data from the table: "chatbot" */
    deleteChatbot: (ChatbotMutationResponse | null)
    /** delete single row from the table: "chatbot" */
    deleteChatbotByPk: (Chatbot | null)
    /** delete data from the table: "chatbot_category" */
    deleteChatbotCategory: (ChatbotCategoryMutationResponse | null)
    /** delete single row from the table: "chatbot_category" */
    deleteChatbotCategoryByPk: (ChatbotCategory | null)
    /** delete data from the table: "complexity_enum" */
    deleteComplexityEnum: (ComplexityEnumMutationResponse | null)
    /** delete single row from the table: "complexity_enum" */
    deleteComplexityEnumByPk: (ComplexityEnum | null)
    /** delete data from the table: "length_enum" */
    deleteLengthEnum: (LengthEnumMutationResponse | null)
    /** delete single row from the table: "length_enum" */
    deleteLengthEnumByPk: (LengthEnum | null)
    /** delete data from the table: "message" */
    deleteMessage: (MessageMutationResponse | null)
    /** delete single row from the table: "message" */
    deleteMessageByPk: (Message | null)
    /** delete data from the table: "message_type_enum" */
    deleteMessageTypeEnum: (MessageTypeEnumMutationResponse | null)
    /** delete single row from the table: "message_type_enum" */
    deleteMessageTypeEnumByPk: (MessageTypeEnum | null)
    /** delete data from the table: "preference" */
    deletePreference: (PreferenceMutationResponse | null)
    /** delete single row from the table: "preference" */
    deletePreferenceByPk: (Preference | null)
    /** delete data from the table: "prompt" */
    deletePrompt: (PromptMutationResponse | null)
    /** delete single row from the table: "prompt" */
    deletePromptByPk: (Prompt | null)
    /** delete data from the table: "prompt_chatbot" */
    deletePromptChatbot: (PromptChatbotMutationResponse | null)
    /** delete single row from the table: "prompt_chatbot" */
    deletePromptChatbotByPk: (PromptChatbot | null)
    /** delete data from the table: "prompt_type_enum" */
    deletePromptTypeEnum: (PromptTypeEnumMutationResponse | null)
    /** delete single row from the table: "prompt_type_enum" */
    deletePromptTypeEnumByPk: (PromptTypeEnum | null)
    /** delete data from the table: "thread" */
    deleteThread: (ThreadMutationResponse | null)
    /** delete single row from the table: "thread" */
    deleteThreadByPk: (Thread | null)
    /** delete data from the table: "tone_enum" */
    deleteToneEnum: (ToneEnumMutationResponse | null)
    /** delete single row from the table: "tone_enum" */
    deleteToneEnumByPk: (ToneEnum | null)
    /** delete data from the table: "type_enum" */
    deleteTypeEnum: (TypeEnumMutationResponse | null)
    /** delete single row from the table: "type_enum" */
    deleteTypeEnumByPk: (TypeEnum | null)
    /** delete data from the table: "user" */
    deleteUser: (UserMutationResponse | null)
    /** delete single row from the table: "user" */
    deleteUserByPk: (User | null)
    /** insert data into the table: "category" */
    insertCategory: (CategoryMutationResponse | null)
    /** insert a single row into the table: "category" */
    insertCategoryOne: (Category | null)
    /** insert data into the table: "chat" */
    insertChat: (ChatMutationResponse | null)
    /** insert a single row into the table: "chat" */
    insertChatOne: (Chat | null)
    /** insert data into the table: "chatbot" */
    insertChatbot: (ChatbotMutationResponse | null)
    /** insert data into the table: "chatbot_category" */
    insertChatbotCategory: (ChatbotCategoryMutationResponse | null)
    /** insert a single row into the table: "chatbot_category" */
    insertChatbotCategoryOne: (ChatbotCategory | null)
    /** insert a single row into the table: "chatbot" */
    insertChatbotOne: (Chatbot | null)
    /** insert data into the table: "complexity_enum" */
    insertComplexityEnum: (ComplexityEnumMutationResponse | null)
    /** insert a single row into the table: "complexity_enum" */
    insertComplexityEnumOne: (ComplexityEnum | null)
    /** insert data into the table: "length_enum" */
    insertLengthEnum: (LengthEnumMutationResponse | null)
    /** insert a single row into the table: "length_enum" */
    insertLengthEnumOne: (LengthEnum | null)
    /** insert data into the table: "message" */
    insertMessage: (MessageMutationResponse | null)
    /** insert a single row into the table: "message" */
    insertMessageOne: (Message | null)
    /** insert data into the table: "message_type_enum" */
    insertMessageTypeEnum: (MessageTypeEnumMutationResponse | null)
    /** insert a single row into the table: "message_type_enum" */
    insertMessageTypeEnumOne: (MessageTypeEnum | null)
    /** insert data into the table: "preference" */
    insertPreference: (PreferenceMutationResponse | null)
    /** insert a single row into the table: "preference" */
    insertPreferenceOne: (Preference | null)
    /** insert data into the table: "prompt" */
    insertPrompt: (PromptMutationResponse | null)
    /** insert data into the table: "prompt_chatbot" */
    insertPromptChatbot: (PromptChatbotMutationResponse | null)
    /** insert a single row into the table: "prompt_chatbot" */
    insertPromptChatbotOne: (PromptChatbot | null)
    /** insert a single row into the table: "prompt" */
    insertPromptOne: (Prompt | null)
    /** insert data into the table: "prompt_type_enum" */
    insertPromptTypeEnum: (PromptTypeEnumMutationResponse | null)
    /** insert a single row into the table: "prompt_type_enum" */
    insertPromptTypeEnumOne: (PromptTypeEnum | null)
    /** insert data into the table: "thread" */
    insertThread: (ThreadMutationResponse | null)
    /** insert a single row into the table: "thread" */
    insertThreadOne: (Thread | null)
    /** insert data into the table: "tone_enum" */
    insertToneEnum: (ToneEnumMutationResponse | null)
    /** insert a single row into the table: "tone_enum" */
    insertToneEnumOne: (ToneEnum | null)
    /** insert data into the table: "type_enum" */
    insertTypeEnum: (TypeEnumMutationResponse | null)
    /** insert a single row into the table: "type_enum" */
    insertTypeEnumOne: (TypeEnum | null)
    /** insert data into the table: "user" */
    insertUser: (UserMutationResponse | null)
    /** insert a single row into the table: "user" */
    insertUserOne: (User | null)
    /** update data of the table: "category" */
    updateCategory: (CategoryMutationResponse | null)
    /** update single row of the table: "category" */
    updateCategoryByPk: (Category | null)
    /** update multiples rows of table: "category" */
    updateCategoryMany: ((CategoryMutationResponse | null)[] | null)
    /** update data of the table: "chat" */
    updateChat: (ChatMutationResponse | null)
    /** update single row of the table: "chat" */
    updateChatByPk: (Chat | null)
    /** update multiples rows of table: "chat" */
    updateChatMany: ((ChatMutationResponse | null)[] | null)
    /** update data of the table: "chatbot" */
    updateChatbot: (ChatbotMutationResponse | null)
    /** update single row of the table: "chatbot" */
    updateChatbotByPk: (Chatbot | null)
    /** update data of the table: "chatbot_category" */
    updateChatbotCategory: (ChatbotCategoryMutationResponse | null)
    /** update single row of the table: "chatbot_category" */
    updateChatbotCategoryByPk: (ChatbotCategory | null)
    /** update multiples rows of table: "chatbot_category" */
    updateChatbotCategoryMany: ((ChatbotCategoryMutationResponse | null)[] | null)
    /** update multiples rows of table: "chatbot" */
    updateChatbotMany: ((ChatbotMutationResponse | null)[] | null)
    /** update data of the table: "complexity_enum" */
    updateComplexityEnum: (ComplexityEnumMutationResponse | null)
    /** update single row of the table: "complexity_enum" */
    updateComplexityEnumByPk: (ComplexityEnum | null)
    /** update multiples rows of table: "complexity_enum" */
    updateComplexityEnumMany: ((ComplexityEnumMutationResponse | null)[] | null)
    /** update data of the table: "length_enum" */
    updateLengthEnum: (LengthEnumMutationResponse | null)
    /** update single row of the table: "length_enum" */
    updateLengthEnumByPk: (LengthEnum | null)
    /** update multiples rows of table: "length_enum" */
    updateLengthEnumMany: ((LengthEnumMutationResponse | null)[] | null)
    /** update data of the table: "message" */
    updateMessage: (MessageMutationResponse | null)
    /** update single row of the table: "message" */
    updateMessageByPk: (Message | null)
    /** update multiples rows of table: "message" */
    updateMessageMany: ((MessageMutationResponse | null)[] | null)
    /** update data of the table: "message_type_enum" */
    updateMessageTypeEnum: (MessageTypeEnumMutationResponse | null)
    /** update single row of the table: "message_type_enum" */
    updateMessageTypeEnumByPk: (MessageTypeEnum | null)
    /** update multiples rows of table: "message_type_enum" */
    updateMessageTypeEnumMany: ((MessageTypeEnumMutationResponse | null)[] | null)
    /** update data of the table: "preference" */
    updatePreference: (PreferenceMutationResponse | null)
    /** update single row of the table: "preference" */
    updatePreferenceByPk: (Preference | null)
    /** update multiples rows of table: "preference" */
    updatePreferenceMany: ((PreferenceMutationResponse | null)[] | null)
    /** update data of the table: "prompt" */
    updatePrompt: (PromptMutationResponse | null)
    /** update single row of the table: "prompt" */
    updatePromptByPk: (Prompt | null)
    /** update data of the table: "prompt_chatbot" */
    updatePromptChatbot: (PromptChatbotMutationResponse | null)
    /** update single row of the table: "prompt_chatbot" */
    updatePromptChatbotByPk: (PromptChatbot | null)
    /** update multiples rows of table: "prompt_chatbot" */
    updatePromptChatbotMany: ((PromptChatbotMutationResponse | null)[] | null)
    /** update multiples rows of table: "prompt" */
    updatePromptMany: ((PromptMutationResponse | null)[] | null)
    /** update data of the table: "prompt_type_enum" */
    updatePromptTypeEnum: (PromptTypeEnumMutationResponse | null)
    /** update single row of the table: "prompt_type_enum" */
    updatePromptTypeEnumByPk: (PromptTypeEnum | null)
    /** update multiples rows of table: "prompt_type_enum" */
    updatePromptTypeEnumMany: ((PromptTypeEnumMutationResponse | null)[] | null)
    /** update data of the table: "thread" */
    updateThread: (ThreadMutationResponse | null)
    /** update single row of the table: "thread" */
    updateThreadByPk: (Thread | null)
    /** update multiples rows of table: "thread" */
    updateThreadMany: ((ThreadMutationResponse | null)[] | null)
    /** update data of the table: "tone_enum" */
    updateToneEnum: (ToneEnumMutationResponse | null)
    /** update single row of the table: "tone_enum" */
    updateToneEnumByPk: (ToneEnum | null)
    /** update multiples rows of table: "tone_enum" */
    updateToneEnumMany: ((ToneEnumMutationResponse | null)[] | null)
    /** update data of the table: "type_enum" */
    updateTypeEnum: (TypeEnumMutationResponse | null)
    /** update single row of the table: "type_enum" */
    updateTypeEnumByPk: (TypeEnum | null)
    /** update multiples rows of table: "type_enum" */
    updateTypeEnumMany: ((TypeEnumMutationResponse | null)[] | null)
    /** update data of the table: "user" */
    updateUser: (UserMutationResponse | null)
    /** update single row of the table: "user" */
    updateUserByPk: (User | null)
    /** update multiples rows of table: "user" */
    updateUserMany: ((UserMutationResponse | null)[] | null)
    __typename: 'mutation_root'
}

export interface query_root {
    /** fetch data from the table: "category" */
    category: Category[]
    /** fetch aggregated fields from the table: "category" */
    categoryAggregate: CategoryAggregate
    /** fetch data from the table: "category" using primary key columns */
    categoryByPk: (Category | null)
    /** fetch data from the table: "chat" */
    chat: Chat[]
    /** fetch aggregated fields from the table: "chat" */
    chatAggregate: ChatAggregate
    /** fetch data from the table: "chat" using primary key columns */
    chatByPk: (Chat | null)
    /** fetch data from the table: "chatbot" */
    chatbot: Chatbot[]
    /** fetch aggregated fields from the table: "chatbot" */
    chatbotAggregate: ChatbotAggregate
    /** fetch data from the table: "chatbot" using primary key columns */
    chatbotByPk: (Chatbot | null)
    /** fetch data from the table: "chatbot_category" */
    chatbotCategory: ChatbotCategory[]
    /** fetch aggregated fields from the table: "chatbot_category" */
    chatbotCategoryAggregate: ChatbotCategoryAggregate
    /** fetch data from the table: "chatbot_category" using primary key columns */
    chatbotCategoryByPk: (ChatbotCategory | null)
    /** fetch data from the table: "complexity_enum" */
    complexityEnum: ComplexityEnum[]
    /** fetch aggregated fields from the table: "complexity_enum" */
    complexityEnumAggregate: ComplexityEnumAggregate
    /** fetch data from the table: "complexity_enum" using primary key columns */
    complexityEnumByPk: (ComplexityEnum | null)
    /** fetch data from the table: "length_enum" */
    lengthEnum: LengthEnum[]
    /** fetch aggregated fields from the table: "length_enum" */
    lengthEnumAggregate: LengthEnumAggregate
    /** fetch data from the table: "length_enum" using primary key columns */
    lengthEnumByPk: (LengthEnum | null)
    /** fetch data from the table: "message" */
    message: Message[]
    /** fetch aggregated fields from the table: "message" */
    messageAggregate: MessageAggregate
    /** fetch data from the table: "message" using primary key columns */
    messageByPk: (Message | null)
    /** fetch data from the table: "message_type_enum" */
    messageTypeEnum: MessageTypeEnum[]
    /** fetch aggregated fields from the table: "message_type_enum" */
    messageTypeEnumAggregate: MessageTypeEnumAggregate
    /** fetch data from the table: "message_type_enum" using primary key columns */
    messageTypeEnumByPk: (MessageTypeEnum | null)
    /** fetch data from the table: "preference" */
    preference: Preference[]
    /** fetch aggregated fields from the table: "preference" */
    preferenceAggregate: PreferenceAggregate
    /** fetch data from the table: "preference" using primary key columns */
    preferenceByPk: (Preference | null)
    /** fetch data from the table: "prompt" */
    prompt: Prompt[]
    /** fetch aggregated fields from the table: "prompt" */
    promptAggregate: PromptAggregate
    /** fetch data from the table: "prompt" using primary key columns */
    promptByPk: (Prompt | null)
    /** fetch data from the table: "prompt_chatbot" */
    promptChatbot: PromptChatbot[]
    /** fetch aggregated fields from the table: "prompt_chatbot" */
    promptChatbotAggregate: PromptChatbotAggregate
    /** fetch data from the table: "prompt_chatbot" using primary key columns */
    promptChatbotByPk: (PromptChatbot | null)
    /** fetch data from the table: "prompt_type_enum" */
    promptTypeEnum: PromptTypeEnum[]
    /** fetch aggregated fields from the table: "prompt_type_enum" */
    promptTypeEnumAggregate: PromptTypeEnumAggregate
    /** fetch data from the table: "prompt_type_enum" using primary key columns */
    promptTypeEnumByPk: (PromptTypeEnum | null)
    /** fetch data from the table: "thread" */
    thread: Thread[]
    /** fetch aggregated fields from the table: "thread" */
    threadAggregate: ThreadAggregate
    /** fetch data from the table: "thread" using primary key columns */
    threadByPk: (Thread | null)
    /** fetch data from the table: "tone_enum" */
    toneEnum: ToneEnum[]
    /** fetch aggregated fields from the table: "tone_enum" */
    toneEnumAggregate: ToneEnumAggregate
    /** fetch data from the table: "tone_enum" using primary key columns */
    toneEnumByPk: (ToneEnum | null)
    /** fetch data from the table: "type_enum" */
    typeEnum: TypeEnum[]
    /** fetch aggregated fields from the table: "type_enum" */
    typeEnumAggregate: TypeEnumAggregate
    /** fetch data from the table: "type_enum" using primary key columns */
    typeEnumByPk: (TypeEnum | null)
    /** fetch data from the table: "user" */
    user: User[]
    /** fetch aggregated fields from the table: "user" */
    userAggregate: UserAggregate
    /** fetch data from the table: "user" using primary key columns */
    userByPk: (User | null)
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "category" */
    category: Category[]
    /** fetch aggregated fields from the table: "category" */
    categoryAggregate: CategoryAggregate
    /** fetch data from the table: "category" using primary key columns */
    categoryByPk: (Category | null)
    /** fetch data from the table in a streaming manner: "category" */
    categoryStream: Category[]
    /** fetch data from the table: "chat" */
    chat: Chat[]
    /** fetch aggregated fields from the table: "chat" */
    chatAggregate: ChatAggregate
    /** fetch data from the table: "chat" using primary key columns */
    chatByPk: (Chat | null)
    /** fetch data from the table in a streaming manner: "chat" */
    chatStream: Chat[]
    /** fetch data from the table: "chatbot" */
    chatbot: Chatbot[]
    /** fetch aggregated fields from the table: "chatbot" */
    chatbotAggregate: ChatbotAggregate
    /** fetch data from the table: "chatbot" using primary key columns */
    chatbotByPk: (Chatbot | null)
    /** fetch data from the table: "chatbot_category" */
    chatbotCategory: ChatbotCategory[]
    /** fetch aggregated fields from the table: "chatbot_category" */
    chatbotCategoryAggregate: ChatbotCategoryAggregate
    /** fetch data from the table: "chatbot_category" using primary key columns */
    chatbotCategoryByPk: (ChatbotCategory | null)
    /** fetch data from the table in a streaming manner: "chatbot_category" */
    chatbotCategoryStream: ChatbotCategory[]
    /** fetch data from the table in a streaming manner: "chatbot" */
    chatbotStream: Chatbot[]
    /** fetch data from the table: "complexity_enum" */
    complexityEnum: ComplexityEnum[]
    /** fetch aggregated fields from the table: "complexity_enum" */
    complexityEnumAggregate: ComplexityEnumAggregate
    /** fetch data from the table: "complexity_enum" using primary key columns */
    complexityEnumByPk: (ComplexityEnum | null)
    /** fetch data from the table in a streaming manner: "complexity_enum" */
    complexityEnumStream: ComplexityEnum[]
    /** fetch data from the table: "length_enum" */
    lengthEnum: LengthEnum[]
    /** fetch aggregated fields from the table: "length_enum" */
    lengthEnumAggregate: LengthEnumAggregate
    /** fetch data from the table: "length_enum" using primary key columns */
    lengthEnumByPk: (LengthEnum | null)
    /** fetch data from the table in a streaming manner: "length_enum" */
    lengthEnumStream: LengthEnum[]
    /** fetch data from the table: "message" */
    message: Message[]
    /** fetch aggregated fields from the table: "message" */
    messageAggregate: MessageAggregate
    /** fetch data from the table: "message" using primary key columns */
    messageByPk: (Message | null)
    /** fetch data from the table in a streaming manner: "message" */
    messageStream: Message[]
    /** fetch data from the table: "message_type_enum" */
    messageTypeEnum: MessageTypeEnum[]
    /** fetch aggregated fields from the table: "message_type_enum" */
    messageTypeEnumAggregate: MessageTypeEnumAggregate
    /** fetch data from the table: "message_type_enum" using primary key columns */
    messageTypeEnumByPk: (MessageTypeEnum | null)
    /** fetch data from the table in a streaming manner: "message_type_enum" */
    messageTypeEnumStream: MessageTypeEnum[]
    /** fetch data from the table: "preference" */
    preference: Preference[]
    /** fetch aggregated fields from the table: "preference" */
    preferenceAggregate: PreferenceAggregate
    /** fetch data from the table: "preference" using primary key columns */
    preferenceByPk: (Preference | null)
    /** fetch data from the table in a streaming manner: "preference" */
    preferenceStream: Preference[]
    /** fetch data from the table: "prompt" */
    prompt: Prompt[]
    /** fetch aggregated fields from the table: "prompt" */
    promptAggregate: PromptAggregate
    /** fetch data from the table: "prompt" using primary key columns */
    promptByPk: (Prompt | null)
    /** fetch data from the table: "prompt_chatbot" */
    promptChatbot: PromptChatbot[]
    /** fetch aggregated fields from the table: "prompt_chatbot" */
    promptChatbotAggregate: PromptChatbotAggregate
    /** fetch data from the table: "prompt_chatbot" using primary key columns */
    promptChatbotByPk: (PromptChatbot | null)
    /** fetch data from the table in a streaming manner: "prompt_chatbot" */
    promptChatbotStream: PromptChatbot[]
    /** fetch data from the table in a streaming manner: "prompt" */
    promptStream: Prompt[]
    /** fetch data from the table: "prompt_type_enum" */
    promptTypeEnum: PromptTypeEnum[]
    /** fetch aggregated fields from the table: "prompt_type_enum" */
    promptTypeEnumAggregate: PromptTypeEnumAggregate
    /** fetch data from the table: "prompt_type_enum" using primary key columns */
    promptTypeEnumByPk: (PromptTypeEnum | null)
    /** fetch data from the table in a streaming manner: "prompt_type_enum" */
    promptTypeEnumStream: PromptTypeEnum[]
    /** fetch data from the table: "thread" */
    thread: Thread[]
    /** fetch aggregated fields from the table: "thread" */
    threadAggregate: ThreadAggregate
    /** fetch data from the table: "thread" using primary key columns */
    threadByPk: (Thread | null)
    /** fetch data from the table in a streaming manner: "thread" */
    threadStream: Thread[]
    /** fetch data from the table: "tone_enum" */
    toneEnum: ToneEnum[]
    /** fetch aggregated fields from the table: "tone_enum" */
    toneEnumAggregate: ToneEnumAggregate
    /** fetch data from the table: "tone_enum" using primary key columns */
    toneEnumByPk: (ToneEnum | null)
    /** fetch data from the table in a streaming manner: "tone_enum" */
    toneEnumStream: ToneEnum[]
    /** fetch data from the table: "type_enum" */
    typeEnum: TypeEnum[]
    /** fetch aggregated fields from the table: "type_enum" */
    typeEnumAggregate: TypeEnumAggregate
    /** fetch data from the table: "type_enum" using primary key columns */
    typeEnumByPk: (TypeEnum | null)
    /** fetch data from the table in a streaming manner: "type_enum" */
    typeEnumStream: TypeEnum[]
    /** fetch data from the table: "user" */
    user: User[]
    /** fetch aggregated fields from the table: "user" */
    userAggregate: UserAggregate
    /** fetch data from the table: "user" using primary key columns */
    userByPk: (User | null)
    /** fetch data from the table in a streaming manner: "user" */
    userStream: User[]
    __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Table to store different categories for chatbots. */
export interface CategoryGenqlSelection{
    categoryId?: boolean | number
    /** An array relationship */
    chatbots?: (ChatbotCategoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotCategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotCategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotCategoryBoolExp | null)} })
    /** An aggregate relationship */
    chatbotsAggregate?: (ChatbotCategoryAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotCategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotCategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotCategoryBoolExp | null)} })
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "category" */
export interface CategoryAggregateGenqlSelection{
    aggregate?: CategoryAggregateFieldsGenqlSelection
    nodes?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "category" */
export interface CategoryAggregateFieldsGenqlSelection{
    avg?: CategoryAvgFieldsGenqlSelection
    count?: { __args: {columns?: (CategorySelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: CategoryMaxFieldsGenqlSelection
    min?: CategoryMinFieldsGenqlSelection
    stddev?: CategoryStddevFieldsGenqlSelection
    stddevPop?: CategoryStddevPopFieldsGenqlSelection
    stddevSamp?: CategoryStddevSampFieldsGenqlSelection
    sum?: CategorySumFieldsGenqlSelection
    varPop?: CategoryVarPopFieldsGenqlSelection
    varSamp?: CategoryVarSampFieldsGenqlSelection
    variance?: CategoryVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface CategoryAvgFieldsGenqlSelection{
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export interface CategoryBoolExp {_and?: (CategoryBoolExp[] | null),_not?: (CategoryBoolExp | null),_or?: (CategoryBoolExp[] | null),categoryId?: (IntComparisonExp | null),chatbots?: (ChatbotCategoryBoolExp | null),chatbotsAggregate?: (ChatbotCategoryAggregateBoolExp | null),name?: (StringComparisonExp | null)}


/** input type for incrementing numeric columns in table "category" */
export interface CategoryIncInput {categoryId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "category" */
export interface CategoryInsertInput {categoryId?: (Scalars['Int'] | null),chatbots?: (ChatbotCategoryArrRelInsertInput | null),name?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface CategoryMaxFieldsGenqlSelection{
    categoryId?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface CategoryMinFieldsGenqlSelection{
    categoryId?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "category" */
export interface CategoryMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "category" */
export interface CategoryObjRelInsertInput {data: CategoryInsertInput,
/** upsert condition */
onConflict?: (CategoryOnConflict | null)}


/** on_conflict condition type for table "category" */
export interface CategoryOnConflict {constraint: CategoryConstraint,updateColumns?: CategoryUpdateColumn[],where?: (CategoryBoolExp | null)}


/** Ordering options when selecting data from "category". */
export interface CategoryOrderBy {categoryId?: (OrderBy | null),chatbotsAggregate?: (ChatbotCategoryAggregateOrderBy | null),name?: (OrderBy | null)}


/** primary key columns input for table: category */
export interface CategoryPkColumnsInput {categoryId: Scalars['Int']}


/** input type for updating data in table "category" */
export interface CategorySetInput {categoryId?: (Scalars['Int'] | null),name?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface CategoryStddevFieldsGenqlSelection{
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddevPop on columns */
export interface CategoryStddevPopFieldsGenqlSelection{
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddevSamp on columns */
export interface CategoryStddevSampFieldsGenqlSelection{
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "category" */
export interface CategoryStreamCursorInput {
/** Stream column input with initial value */
initialValue: CategoryStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface CategoryStreamCursorValueInput {categoryId?: (Scalars['Int'] | null),name?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface CategorySumFieldsGenqlSelection{
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoryUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (CategoryIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (CategorySetInput | null),
/** filter the rows which have to be updated */
where: CategoryBoolExp}


/** aggregate varPop on columns */
export interface CategoryVarPopFieldsGenqlSelection{
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate varSamp on columns */
export interface CategoryVarSampFieldsGenqlSelection{
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface CategoryVarianceFieldsGenqlSelection{
    categoryId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Table to store links to GPT chat conversations and associate them with a specific GPT chatbot and the user who added the link. */
export interface ChatGenqlSelection{
    addedBy?: boolean | number
    chatId?: boolean | number
    /** An object relationship */
    chatbot?: ChatbotGenqlSelection
    chatbotId?: boolean | number
    conversationLink?: boolean | number
    /** An object relationship */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "chat" */
export interface ChatAggregateGenqlSelection{
    aggregate?: ChatAggregateFieldsGenqlSelection
    nodes?: ChatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChatAggregateBoolExp {count?: (chatAggregateBoolExpCount | null)}


/** aggregate fields of "chat" */
export interface ChatAggregateFieldsGenqlSelection{
    avg?: ChatAvgFieldsGenqlSelection
    count?: { __args: {columns?: (ChatSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: ChatMaxFieldsGenqlSelection
    min?: ChatMinFieldsGenqlSelection
    stddev?: ChatStddevFieldsGenqlSelection
    stddevPop?: ChatStddevPopFieldsGenqlSelection
    stddevSamp?: ChatStddevSampFieldsGenqlSelection
    sum?: ChatSumFieldsGenqlSelection
    varPop?: ChatVarPopFieldsGenqlSelection
    varSamp?: ChatVarSampFieldsGenqlSelection
    variance?: ChatVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "chat" */
export interface ChatAggregateOrderBy {avg?: (ChatAvgOrderBy | null),count?: (OrderBy | null),max?: (ChatMaxOrderBy | null),min?: (ChatMinOrderBy | null),stddev?: (ChatStddevOrderBy | null),stddevPop?: (ChatStddevPopOrderBy | null),stddevSamp?: (ChatStddevSampOrderBy | null),sum?: (ChatSumOrderBy | null),varPop?: (ChatVarPopOrderBy | null),varSamp?: (ChatVarSampOrderBy | null),variance?: (ChatVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "chat" */
export interface ChatArrRelInsertInput {data: ChatInsertInput[],
/** upsert condition */
onConflict?: (ChatOnConflict | null)}


/** aggregate avg on columns */
export interface ChatAvgFieldsGenqlSelection{
    chatId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "chat" */
export interface ChatAvgOrderBy {chatId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "chat". All fields are combined with a logical 'AND'. */
export interface ChatBoolExp {_and?: (ChatBoolExp[] | null),_not?: (ChatBoolExp | null),_or?: (ChatBoolExp[] | null),addedBy?: (UuidComparisonExp | null),chatId?: (IntComparisonExp | null),chatbot?: (ChatbotBoolExp | null),chatbotId?: (IntComparisonExp | null),conversationLink?: (StringComparisonExp | null),user?: (UserBoolExp | null)}


/** input type for incrementing numeric columns in table "chat" */
export interface ChatIncInput {chatId?: (Scalars['Int'] | null),chatbotId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "chat" */
export interface ChatInsertInput {addedBy?: (Scalars['uuid'] | null),chatId?: (Scalars['Int'] | null),chatbot?: (ChatbotObjRelInsertInput | null),chatbotId?: (Scalars['Int'] | null),conversationLink?: (Scalars['String'] | null),user?: (UserObjRelInsertInput | null)}


/** aggregate max on columns */
export interface ChatMaxFieldsGenqlSelection{
    addedBy?: boolean | number
    chatId?: boolean | number
    chatbotId?: boolean | number
    conversationLink?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "chat" */
export interface ChatMaxOrderBy {addedBy?: (OrderBy | null),chatId?: (OrderBy | null),chatbotId?: (OrderBy | null),conversationLink?: (OrderBy | null)}


/** aggregate min on columns */
export interface ChatMinFieldsGenqlSelection{
    addedBy?: boolean | number
    chatId?: boolean | number
    chatbotId?: boolean | number
    conversationLink?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "chat" */
export interface ChatMinOrderBy {addedBy?: (OrderBy | null),chatId?: (OrderBy | null),chatbotId?: (OrderBy | null),conversationLink?: (OrderBy | null)}


/** response of any mutation on the table "chat" */
export interface ChatMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ChatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "chat" */
export interface ChatOnConflict {constraint: ChatConstraint,updateColumns?: ChatUpdateColumn[],where?: (ChatBoolExp | null)}


/** Ordering options when selecting data from "chat". */
export interface ChatOrderBy {addedBy?: (OrderBy | null),chatId?: (OrderBy | null),chatbot?: (ChatbotOrderBy | null),chatbotId?: (OrderBy | null),conversationLink?: (OrderBy | null),user?: (UserOrderBy | null)}


/** primary key columns input for table: chat */
export interface ChatPkColumnsInput {chatId: Scalars['Int']}


/** input type for updating data in table "chat" */
export interface ChatSetInput {addedBy?: (Scalars['uuid'] | null),chatId?: (Scalars['Int'] | null),chatbotId?: (Scalars['Int'] | null),conversationLink?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface ChatStddevFieldsGenqlSelection{
    chatId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "chat" */
export interface ChatStddevOrderBy {chatId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface ChatStddevPopFieldsGenqlSelection{
    chatId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "chat" */
export interface ChatStddevPopOrderBy {chatId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface ChatStddevSampFieldsGenqlSelection{
    chatId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "chat" */
export interface ChatStddevSampOrderBy {chatId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** Streaming cursor of the table "chat" */
export interface ChatStreamCursorInput {
/** Stream column input with initial value */
initialValue: ChatStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface ChatStreamCursorValueInput {addedBy?: (Scalars['uuid'] | null),chatId?: (Scalars['Int'] | null),chatbotId?: (Scalars['Int'] | null),conversationLink?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface ChatSumFieldsGenqlSelection{
    chatId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "chat" */
export interface ChatSumOrderBy {chatId?: (OrderBy | null),chatbotId?: (OrderBy | null)}

export interface ChatUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (ChatIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (ChatSetInput | null),
/** filter the rows which have to be updated */
where: ChatBoolExp}


/** aggregate varPop on columns */
export interface ChatVarPopFieldsGenqlSelection{
    chatId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "chat" */
export interface ChatVarPopOrderBy {chatId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface ChatVarSampFieldsGenqlSelection{
    chatId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "chat" */
export interface ChatVarSampOrderBy {chatId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** aggregate variance on columns */
export interface ChatVarianceFieldsGenqlSelection{
    chatId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "chat" */
export interface ChatVarianceOrderBy {chatId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** Table storing information about chatbots, their characteristics, and default settings. */
export interface ChatbotGenqlSelection{
    avatar?: boolean | number
    /** An array relationship */
    categories?: (ChatbotCategoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotCategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotCategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotCategoryBoolExp | null)} })
    /** An aggregate relationship */
    categoriesAggregate?: (ChatbotCategoryAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotCategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotCategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotCategoryBoolExp | null)} })
    chatbotId?: boolean | number
    /** An array relationship */
    chats?: (ChatGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatBoolExp | null)} })
    /** An aggregate relationship */
    chatsAggregate?: (ChatAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatBoolExp | null)} })
    createdBy?: boolean | number
    defaultComplexity?: boolean | number
    defaultLength?: boolean | number
    defaultTone?: boolean | number
    defaultType?: boolean | number
    description?: boolean | number
    name?: boolean | number
    /** An array relationship */
    preferences?: (PreferenceGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PreferenceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PreferenceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PreferenceBoolExp | null)} })
    /** An aggregate relationship */
    preferencesAggregate?: (PreferenceAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PreferenceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PreferenceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PreferenceBoolExp | null)} })
    /** An array relationship */
    prompts?: (PromptChatbotGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptChatbotBoolExp | null)} })
    /** An aggregate relationship */
    promptsAggregate?: (PromptChatbotAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptChatbotBoolExp | null)} })
    /** An array relationship */
    threads?: (ThreadGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ThreadSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ThreadOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ThreadBoolExp | null)} })
    /** An aggregate relationship */
    threadsAggregate?: (ThreadAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ThreadSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ThreadOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ThreadBoolExp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "chatbot" */
export interface ChatbotAggregateGenqlSelection{
    aggregate?: ChatbotAggregateFieldsGenqlSelection
    nodes?: ChatbotGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "chatbot" */
export interface ChatbotAggregateFieldsGenqlSelection{
    avg?: ChatbotAvgFieldsGenqlSelection
    count?: { __args: {columns?: (ChatbotSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: ChatbotMaxFieldsGenqlSelection
    min?: ChatbotMinFieldsGenqlSelection
    stddev?: ChatbotStddevFieldsGenqlSelection
    stddevPop?: ChatbotStddevPopFieldsGenqlSelection
    stddevSamp?: ChatbotStddevSampFieldsGenqlSelection
    sum?: ChatbotSumFieldsGenqlSelection
    varPop?: ChatbotVarPopFieldsGenqlSelection
    varSamp?: ChatbotVarSampFieldsGenqlSelection
    variance?: ChatbotVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface ChatbotAvgFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "chatbot". All fields are combined with a logical 'AND'. */
export interface ChatbotBoolExp {_and?: (ChatbotBoolExp[] | null),_not?: (ChatbotBoolExp | null),_or?: (ChatbotBoolExp[] | null),avatar?: (StringComparisonExp | null),categories?: (ChatbotCategoryBoolExp | null),categoriesAggregate?: (ChatbotCategoryAggregateBoolExp | null),chatbotId?: (IntComparisonExp | null),chats?: (ChatBoolExp | null),chatsAggregate?: (ChatAggregateBoolExp | null),createdBy?: (StringComparisonExp | null),defaultComplexity?: (StringComparisonExp | null),defaultLength?: (StringComparisonExp | null),defaultTone?: (StringComparisonExp | null),defaultType?: (StringComparisonExp | null),description?: (StringComparisonExp | null),name?: (StringComparisonExp | null),preferences?: (PreferenceBoolExp | null),preferencesAggregate?: (PreferenceAggregateBoolExp | null),prompts?: (PromptChatbotBoolExp | null),promptsAggregate?: (PromptChatbotAggregateBoolExp | null),threads?: (ThreadBoolExp | null),threadsAggregate?: (ThreadAggregateBoolExp | null)}


/** Junction table to manage the many-to-many relationships between chatbots and their categories. */
export interface ChatbotCategoryGenqlSelection{
    /** An object relationship */
    category?: CategoryGenqlSelection
    categoryId?: boolean | number
    /** An object relationship */
    chatbot?: ChatbotGenqlSelection
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "chatbot_category" */
export interface ChatbotCategoryAggregateGenqlSelection{
    aggregate?: ChatbotCategoryAggregateFieldsGenqlSelection
    nodes?: ChatbotCategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChatbotCategoryAggregateBoolExp {count?: (chatbotCategoryAggregateBoolExpCount | null)}


/** aggregate fields of "chatbot_category" */
export interface ChatbotCategoryAggregateFieldsGenqlSelection{
    avg?: ChatbotCategoryAvgFieldsGenqlSelection
    count?: { __args: {columns?: (ChatbotCategorySelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: ChatbotCategoryMaxFieldsGenqlSelection
    min?: ChatbotCategoryMinFieldsGenqlSelection
    stddev?: ChatbotCategoryStddevFieldsGenqlSelection
    stddevPop?: ChatbotCategoryStddevPopFieldsGenqlSelection
    stddevSamp?: ChatbotCategoryStddevSampFieldsGenqlSelection
    sum?: ChatbotCategorySumFieldsGenqlSelection
    varPop?: ChatbotCategoryVarPopFieldsGenqlSelection
    varSamp?: ChatbotCategoryVarSampFieldsGenqlSelection
    variance?: ChatbotCategoryVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "chatbot_category" */
export interface ChatbotCategoryAggregateOrderBy {avg?: (ChatbotCategoryAvgOrderBy | null),count?: (OrderBy | null),max?: (ChatbotCategoryMaxOrderBy | null),min?: (ChatbotCategoryMinOrderBy | null),stddev?: (ChatbotCategoryStddevOrderBy | null),stddevPop?: (ChatbotCategoryStddevPopOrderBy | null),stddevSamp?: (ChatbotCategoryStddevSampOrderBy | null),sum?: (ChatbotCategorySumOrderBy | null),varPop?: (ChatbotCategoryVarPopOrderBy | null),varSamp?: (ChatbotCategoryVarSampOrderBy | null),variance?: (ChatbotCategoryVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "chatbot_category" */
export interface ChatbotCategoryArrRelInsertInput {data: ChatbotCategoryInsertInput[],
/** upsert condition */
onConflict?: (ChatbotCategoryOnConflict | null)}


/** aggregate avg on columns */
export interface ChatbotCategoryAvgFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "chatbot_category" */
export interface ChatbotCategoryAvgOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "chatbot_category". All fields are combined with a logical 'AND'. */
export interface ChatbotCategoryBoolExp {_and?: (ChatbotCategoryBoolExp[] | null),_not?: (ChatbotCategoryBoolExp | null),_or?: (ChatbotCategoryBoolExp[] | null),category?: (CategoryBoolExp | null),categoryId?: (IntComparisonExp | null),chatbot?: (ChatbotBoolExp | null),chatbotId?: (IntComparisonExp | null)}


/** input type for incrementing numeric columns in table "chatbot_category" */
export interface ChatbotCategoryIncInput {categoryId?: (Scalars['Int'] | null),chatbotId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "chatbot_category" */
export interface ChatbotCategoryInsertInput {category?: (CategoryObjRelInsertInput | null),categoryId?: (Scalars['Int'] | null),chatbot?: (ChatbotObjRelInsertInput | null),chatbotId?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface ChatbotCategoryMaxFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "chatbot_category" */
export interface ChatbotCategoryMaxOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** aggregate min on columns */
export interface ChatbotCategoryMinFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "chatbot_category" */
export interface ChatbotCategoryMinOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** response of any mutation on the table "chatbot_category" */
export interface ChatbotCategoryMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ChatbotCategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "chatbot_category" */
export interface ChatbotCategoryOnConflict {constraint: ChatbotCategoryConstraint,updateColumns?: ChatbotCategoryUpdateColumn[],where?: (ChatbotCategoryBoolExp | null)}


/** Ordering options when selecting data from "chatbot_category". */
export interface ChatbotCategoryOrderBy {category?: (CategoryOrderBy | null),categoryId?: (OrderBy | null),chatbot?: (ChatbotOrderBy | null),chatbotId?: (OrderBy | null)}


/** primary key columns input for table: chatbot_category */
export interface ChatbotCategoryPkColumnsInput {categoryId: Scalars['Int'],chatbotId: Scalars['Int']}


/** input type for updating data in table "chatbot_category" */
export interface ChatbotCategorySetInput {categoryId?: (Scalars['Int'] | null),chatbotId?: (Scalars['Int'] | null)}


/** aggregate stddev on columns */
export interface ChatbotCategoryStddevFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "chatbot_category" */
export interface ChatbotCategoryStddevOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface ChatbotCategoryStddevPopFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "chatbot_category" */
export interface ChatbotCategoryStddevPopOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface ChatbotCategoryStddevSampFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "chatbot_category" */
export interface ChatbotCategoryStddevSampOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** Streaming cursor of the table "chatbot_category" */
export interface ChatbotCategoryStreamCursorInput {
/** Stream column input with initial value */
initialValue: ChatbotCategoryStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface ChatbotCategoryStreamCursorValueInput {categoryId?: (Scalars['Int'] | null),chatbotId?: (Scalars['Int'] | null)}


/** aggregate sum on columns */
export interface ChatbotCategorySumFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "chatbot_category" */
export interface ChatbotCategorySumOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}

export interface ChatbotCategoryUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (ChatbotCategoryIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (ChatbotCategorySetInput | null),
/** filter the rows which have to be updated */
where: ChatbotCategoryBoolExp}


/** aggregate varPop on columns */
export interface ChatbotCategoryVarPopFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "chatbot_category" */
export interface ChatbotCategoryVarPopOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface ChatbotCategoryVarSampFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "chatbot_category" */
export interface ChatbotCategoryVarSampOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** aggregate variance on columns */
export interface ChatbotCategoryVarianceFieldsGenqlSelection{
    categoryId?: boolean | number
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "chatbot_category" */
export interface ChatbotCategoryVarianceOrderBy {categoryId?: (OrderBy | null),chatbotId?: (OrderBy | null)}


/** input type for incrementing numeric columns in table "chatbot" */
export interface ChatbotIncInput {chatbotId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "chatbot" */
export interface ChatbotInsertInput {avatar?: (Scalars['String'] | null),categories?: (ChatbotCategoryArrRelInsertInput | null),chatbotId?: (Scalars['Int'] | null),chats?: (ChatArrRelInsertInput | null),createdBy?: (Scalars['String'] | null),defaultComplexity?: (Scalars['String'] | null),defaultLength?: (Scalars['String'] | null),defaultTone?: (Scalars['String'] | null),defaultType?: (Scalars['String'] | null),description?: (Scalars['String'] | null),name?: (Scalars['String'] | null),preferences?: (PreferenceArrRelInsertInput | null),prompts?: (PromptChatbotArrRelInsertInput | null),threads?: (ThreadArrRelInsertInput | null)}


/** aggregate max on columns */
export interface ChatbotMaxFieldsGenqlSelection{
    avatar?: boolean | number
    chatbotId?: boolean | number
    createdBy?: boolean | number
    defaultComplexity?: boolean | number
    defaultLength?: boolean | number
    defaultTone?: boolean | number
    defaultType?: boolean | number
    description?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface ChatbotMinFieldsGenqlSelection{
    avatar?: boolean | number
    chatbotId?: boolean | number
    createdBy?: boolean | number
    defaultComplexity?: boolean | number
    defaultLength?: boolean | number
    defaultTone?: boolean | number
    defaultType?: boolean | number
    description?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "chatbot" */
export interface ChatbotMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ChatbotGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "chatbot" */
export interface ChatbotObjRelInsertInput {data: ChatbotInsertInput,
/** upsert condition */
onConflict?: (ChatbotOnConflict | null)}


/** on_conflict condition type for table "chatbot" */
export interface ChatbotOnConflict {constraint: ChatbotConstraint,updateColumns?: ChatbotUpdateColumn[],where?: (ChatbotBoolExp | null)}


/** Ordering options when selecting data from "chatbot". */
export interface ChatbotOrderBy {avatar?: (OrderBy | null),categoriesAggregate?: (ChatbotCategoryAggregateOrderBy | null),chatbotId?: (OrderBy | null),chatsAggregate?: (ChatAggregateOrderBy | null),createdBy?: (OrderBy | null),defaultComplexity?: (OrderBy | null),defaultLength?: (OrderBy | null),defaultTone?: (OrderBy | null),defaultType?: (OrderBy | null),description?: (OrderBy | null),name?: (OrderBy | null),preferencesAggregate?: (PreferenceAggregateOrderBy | null),promptsAggregate?: (PromptChatbotAggregateOrderBy | null),threadsAggregate?: (ThreadAggregateOrderBy | null)}


/** primary key columns input for table: chatbot */
export interface ChatbotPkColumnsInput {chatbotId: Scalars['Int']}


/** input type for updating data in table "chatbot" */
export interface ChatbotSetInput {avatar?: (Scalars['String'] | null),chatbotId?: (Scalars['Int'] | null),createdBy?: (Scalars['String'] | null),defaultComplexity?: (Scalars['String'] | null),defaultLength?: (Scalars['String'] | null),defaultTone?: (Scalars['String'] | null),defaultType?: (Scalars['String'] | null),description?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface ChatbotStddevFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddevPop on columns */
export interface ChatbotStddevPopFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddevSamp on columns */
export interface ChatbotStddevSampFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "chatbot" */
export interface ChatbotStreamCursorInput {
/** Stream column input with initial value */
initialValue: ChatbotStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface ChatbotStreamCursorValueInput {avatar?: (Scalars['String'] | null),chatbotId?: (Scalars['Int'] | null),createdBy?: (Scalars['String'] | null),defaultComplexity?: (Scalars['String'] | null),defaultLength?: (Scalars['String'] | null),defaultTone?: (Scalars['String'] | null),defaultType?: (Scalars['String'] | null),description?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface ChatbotSumFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChatbotUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (ChatbotIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (ChatbotSetInput | null),
/** filter the rows which have to be updated */
where: ChatbotBoolExp}


/** aggregate varPop on columns */
export interface ChatbotVarPopFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate varSamp on columns */
export interface ChatbotVarSampFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface ChatbotVarianceFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "complexity_enum" */
export interface ComplexityEnumGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "complexity_enum" */
export interface ComplexityEnumAggregateGenqlSelection{
    aggregate?: ComplexityEnumAggregateFieldsGenqlSelection
    nodes?: ComplexityEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "complexity_enum" */
export interface ComplexityEnumAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (ComplexityEnumSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: ComplexityEnumMaxFieldsGenqlSelection
    min?: ComplexityEnumMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "complexity_enum". All fields are combined with a logical 'AND'. */
export interface ComplexityEnumBoolExp {_and?: (ComplexityEnumBoolExp[] | null),_not?: (ComplexityEnumBoolExp | null),_or?: (ComplexityEnumBoolExp[] | null),value?: (StringComparisonExp | null)}


/** input type for inserting data into table "complexity_enum" */
export interface ComplexityEnumInsertInput {value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface ComplexityEnumMaxFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface ComplexityEnumMinFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "complexity_enum" */
export interface ComplexityEnumMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ComplexityEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "complexity_enum" */
export interface ComplexityEnumOnConflict {constraint: ComplexityEnumConstraint,updateColumns?: ComplexityEnumUpdateColumn[],where?: (ComplexityEnumBoolExp | null)}


/** Ordering options when selecting data from "complexity_enum". */
export interface ComplexityEnumOrderBy {value?: (OrderBy | null)}


/** primary key columns input for table: complexity_enum */
export interface ComplexityEnumPkColumnsInput {value: Scalars['String']}


/** input type for updating data in table "complexity_enum" */
export interface ComplexityEnumSetInput {value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "complexity_enum" */
export interface ComplexityEnumStreamCursorInput {
/** Stream column input with initial value */
initialValue: ComplexityEnumStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface ComplexityEnumStreamCursorValueInput {value?: (Scalars['String'] | null)}

export interface ComplexityEnumUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (ComplexityEnumSetInput | null),
/** filter the rows which have to be updated */
where: ComplexityEnumBoolExp}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface IntComparisonExp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** columns and relationships of "length_enum" */
export interface LengthEnumGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "length_enum" */
export interface LengthEnumAggregateGenqlSelection{
    aggregate?: LengthEnumAggregateFieldsGenqlSelection
    nodes?: LengthEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "length_enum" */
export interface LengthEnumAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (LengthEnumSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: LengthEnumMaxFieldsGenqlSelection
    min?: LengthEnumMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "length_enum". All fields are combined with a logical 'AND'. */
export interface LengthEnumBoolExp {_and?: (LengthEnumBoolExp[] | null),_not?: (LengthEnumBoolExp | null),_or?: (LengthEnumBoolExp[] | null),value?: (StringComparisonExp | null)}


/** input type for inserting data into table "length_enum" */
export interface LengthEnumInsertInput {value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface LengthEnumMaxFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface LengthEnumMinFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "length_enum" */
export interface LengthEnumMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: LengthEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "length_enum" */
export interface LengthEnumOnConflict {constraint: LengthEnumConstraint,updateColumns?: LengthEnumUpdateColumn[],where?: (LengthEnumBoolExp | null)}


/** Ordering options when selecting data from "length_enum". */
export interface LengthEnumOrderBy {value?: (OrderBy | null)}


/** primary key columns input for table: length_enum */
export interface LengthEnumPkColumnsInput {value: Scalars['String']}


/** input type for updating data in table "length_enum" */
export interface LengthEnumSetInput {value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "length_enum" */
export interface LengthEnumStreamCursorInput {
/** Stream column input with initial value */
initialValue: LengthEnumStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface LengthEnumStreamCursorValueInput {value?: (Scalars['String'] | null)}

export interface LengthEnumUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (LengthEnumSetInput | null),
/** filter the rows which have to be updated */
where: LengthEnumBoolExp}


/** This table stores the messages exchanged between users and chatbots. */
export interface MessageGenqlSelection{
    content?: boolean | number
    createdAt?: boolean | number
    messageId?: boolean | number
    role?: boolean | number
    /** An object relationship */
    thread?: ThreadGenqlSelection
    threadId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "message" */
export interface MessageAggregateGenqlSelection{
    aggregate?: MessageAggregateFieldsGenqlSelection
    nodes?: MessageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MessageAggregateBoolExp {count?: (messageAggregateBoolExpCount | null)}


/** aggregate fields of "message" */
export interface MessageAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (MessageSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: MessageMaxFieldsGenqlSelection
    min?: MessageMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "message" */
export interface MessageAggregateOrderBy {count?: (OrderBy | null),max?: (MessageMaxOrderBy | null),min?: (MessageMinOrderBy | null)}


/** input type for inserting array relation for remote table "message" */
export interface MessageArrRelInsertInput {data: MessageInsertInput[],
/** upsert condition */
onConflict?: (MessageOnConflict | null)}


/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export interface MessageBoolExp {_and?: (MessageBoolExp[] | null),_not?: (MessageBoolExp | null),_or?: (MessageBoolExp[] | null),content?: (StringComparisonExp | null),createdAt?: (TimestamptzComparisonExp | null),messageId?: (UuidComparisonExp | null),role?: (StringComparisonExp | null),thread?: (ThreadBoolExp | null),threadId?: (UuidComparisonExp | null)}


/** input type for inserting data into table "message" */
export interface MessageInsertInput {content?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),messageId?: (Scalars['uuid'] | null),role?: (Scalars['String'] | null),thread?: (ThreadObjRelInsertInput | null),threadId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface MessageMaxFieldsGenqlSelection{
    content?: boolean | number
    createdAt?: boolean | number
    messageId?: boolean | number
    role?: boolean | number
    threadId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "message" */
export interface MessageMaxOrderBy {content?: (OrderBy | null),createdAt?: (OrderBy | null),messageId?: (OrderBy | null),role?: (OrderBy | null),threadId?: (OrderBy | null)}


/** aggregate min on columns */
export interface MessageMinFieldsGenqlSelection{
    content?: boolean | number
    createdAt?: boolean | number
    messageId?: boolean | number
    role?: boolean | number
    threadId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "message" */
export interface MessageMinOrderBy {content?: (OrderBy | null),createdAt?: (OrderBy | null),messageId?: (OrderBy | null),role?: (OrderBy | null),threadId?: (OrderBy | null)}


/** response of any mutation on the table "message" */
export interface MessageMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: MessageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "message" */
export interface MessageOnConflict {constraint: MessageConstraint,updateColumns?: MessageUpdateColumn[],where?: (MessageBoolExp | null)}


/** Ordering options when selecting data from "message". */
export interface MessageOrderBy {content?: (OrderBy | null),createdAt?: (OrderBy | null),messageId?: (OrderBy | null),role?: (OrderBy | null),thread?: (ThreadOrderBy | null),threadId?: (OrderBy | null)}


/** primary key columns input for table: message */
export interface MessagePkColumnsInput {messageId: Scalars['uuid']}


/** input type for updating data in table "message" */
export interface MessageSetInput {content?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),messageId?: (Scalars['uuid'] | null),role?: (Scalars['String'] | null),threadId?: (Scalars['uuid'] | null)}


/** Streaming cursor of the table "message" */
export interface MessageStreamCursorInput {
/** Stream column input with initial value */
initialValue: MessageStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface MessageStreamCursorValueInput {content?: (Scalars['String'] | null),createdAt?: (Scalars['timestamptz'] | null),messageId?: (Scalars['uuid'] | null),role?: (Scalars['String'] | null),threadId?: (Scalars['uuid'] | null)}


/** columns and relationships of "message_type_enum" */
export interface MessageTypeEnumGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "message_type_enum" */
export interface MessageTypeEnumAggregateGenqlSelection{
    aggregate?: MessageTypeEnumAggregateFieldsGenqlSelection
    nodes?: MessageTypeEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "message_type_enum" */
export interface MessageTypeEnumAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (MessageTypeEnumSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: MessageTypeEnumMaxFieldsGenqlSelection
    min?: MessageTypeEnumMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "message_type_enum". All fields are combined with a logical 'AND'. */
export interface MessageTypeEnumBoolExp {_and?: (MessageTypeEnumBoolExp[] | null),_not?: (MessageTypeEnumBoolExp | null),_or?: (MessageTypeEnumBoolExp[] | null),value?: (StringComparisonExp | null)}


/** input type for inserting data into table "message_type_enum" */
export interface MessageTypeEnumInsertInput {value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface MessageTypeEnumMaxFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface MessageTypeEnumMinFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "message_type_enum" */
export interface MessageTypeEnumMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: MessageTypeEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "message_type_enum" */
export interface MessageTypeEnumOnConflict {constraint: MessageTypeEnumConstraint,updateColumns?: MessageTypeEnumUpdateColumn[],where?: (MessageTypeEnumBoolExp | null)}


/** Ordering options when selecting data from "message_type_enum". */
export interface MessageTypeEnumOrderBy {value?: (OrderBy | null)}


/** primary key columns input for table: message_type_enum */
export interface MessageTypeEnumPkColumnsInput {value: Scalars['String']}


/** input type for updating data in table "message_type_enum" */
export interface MessageTypeEnumSetInput {value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "message_type_enum" */
export interface MessageTypeEnumStreamCursorInput {
/** Stream column input with initial value */
initialValue: MessageTypeEnumStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface MessageTypeEnumStreamCursorValueInput {value?: (Scalars['String'] | null)}

export interface MessageTypeEnumUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (MessageTypeEnumSetInput | null),
/** filter the rows which have to be updated */
where: MessageTypeEnumBoolExp}

export interface MessageUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (MessageSetInput | null),
/** filter the rows which have to be updated */
where: MessageBoolExp}


/** This table stores user-specific preferences for quick access when they interact with a chatbot. */
export interface PreferenceGenqlSelection{
    /** An object relationship */
    chatbot?: ChatbotGenqlSelection
    chatbotId?: boolean | number
    favorite?: boolean | number
    preferenceId?: boolean | number
    preferredComplexity?: boolean | number
    preferredLength?: boolean | number
    preferredTone?: boolean | number
    preferredType?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "preference" */
export interface PreferenceAggregateGenqlSelection{
    aggregate?: PreferenceAggregateFieldsGenqlSelection
    nodes?: PreferenceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PreferenceAggregateBoolExp {bool_and?: (preferenceAggregateBoolExpBool_and | null),bool_or?: (preferenceAggregateBoolExpBool_or | null),count?: (preferenceAggregateBoolExpCount | null)}


/** aggregate fields of "preference" */
export interface PreferenceAggregateFieldsGenqlSelection{
    avg?: PreferenceAvgFieldsGenqlSelection
    count?: { __args: {columns?: (PreferenceSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: PreferenceMaxFieldsGenqlSelection
    min?: PreferenceMinFieldsGenqlSelection
    stddev?: PreferenceStddevFieldsGenqlSelection
    stddevPop?: PreferenceStddevPopFieldsGenqlSelection
    stddevSamp?: PreferenceStddevSampFieldsGenqlSelection
    sum?: PreferenceSumFieldsGenqlSelection
    varPop?: PreferenceVarPopFieldsGenqlSelection
    varSamp?: PreferenceVarSampFieldsGenqlSelection
    variance?: PreferenceVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "preference" */
export interface PreferenceAggregateOrderBy {avg?: (PreferenceAvgOrderBy | null),count?: (OrderBy | null),max?: (PreferenceMaxOrderBy | null),min?: (PreferenceMinOrderBy | null),stddev?: (PreferenceStddevOrderBy | null),stddevPop?: (PreferenceStddevPopOrderBy | null),stddevSamp?: (PreferenceStddevSampOrderBy | null),sum?: (PreferenceSumOrderBy | null),varPop?: (PreferenceVarPopOrderBy | null),varSamp?: (PreferenceVarSampOrderBy | null),variance?: (PreferenceVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "preference" */
export interface PreferenceArrRelInsertInput {data: PreferenceInsertInput[],
/** upsert condition */
onConflict?: (PreferenceOnConflict | null)}


/** aggregate avg on columns */
export interface PreferenceAvgFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "preference" */
export interface PreferenceAvgOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "preference". All fields are combined with a logical 'AND'. */
export interface PreferenceBoolExp {_and?: (PreferenceBoolExp[] | null),_not?: (PreferenceBoolExp | null),_or?: (PreferenceBoolExp[] | null),chatbot?: (ChatbotBoolExp | null),chatbotId?: (IntComparisonExp | null),favorite?: (BooleanComparisonExp | null),preferenceId?: (IntComparisonExp | null),preferredComplexity?: (StringComparisonExp | null),preferredLength?: (StringComparisonExp | null),preferredTone?: (StringComparisonExp | null),preferredType?: (StringComparisonExp | null),userId?: (UuidComparisonExp | null)}


/** input type for incrementing numeric columns in table "preference" */
export interface PreferenceIncInput {chatbotId?: (Scalars['Int'] | null),preferenceId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "preference" */
export interface PreferenceInsertInput {chatbot?: (ChatbotObjRelInsertInput | null),chatbotId?: (Scalars['Int'] | null),favorite?: (Scalars['Boolean'] | null),preferenceId?: (Scalars['Int'] | null),preferredComplexity?: (Scalars['String'] | null),preferredLength?: (Scalars['String'] | null),preferredTone?: (Scalars['String'] | null),preferredType?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface PreferenceMaxFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    preferredComplexity?: boolean | number
    preferredLength?: boolean | number
    preferredTone?: boolean | number
    preferredType?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "preference" */
export interface PreferenceMaxOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null),preferredComplexity?: (OrderBy | null),preferredLength?: (OrderBy | null),preferredTone?: (OrderBy | null),preferredType?: (OrderBy | null),userId?: (OrderBy | null)}


/** aggregate min on columns */
export interface PreferenceMinFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    preferredComplexity?: boolean | number
    preferredLength?: boolean | number
    preferredTone?: boolean | number
    preferredType?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "preference" */
export interface PreferenceMinOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null),preferredComplexity?: (OrderBy | null),preferredLength?: (OrderBy | null),preferredTone?: (OrderBy | null),preferredType?: (OrderBy | null),userId?: (OrderBy | null)}


/** response of any mutation on the table "preference" */
export interface PreferenceMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: PreferenceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "preference" */
export interface PreferenceOnConflict {constraint: PreferenceConstraint,updateColumns?: PreferenceUpdateColumn[],where?: (PreferenceBoolExp | null)}


/** Ordering options when selecting data from "preference". */
export interface PreferenceOrderBy {chatbot?: (ChatbotOrderBy | null),chatbotId?: (OrderBy | null),favorite?: (OrderBy | null),preferenceId?: (OrderBy | null),preferredComplexity?: (OrderBy | null),preferredLength?: (OrderBy | null),preferredTone?: (OrderBy | null),preferredType?: (OrderBy | null),userId?: (OrderBy | null)}


/** primary key columns input for table: preference */
export interface PreferencePkColumnsInput {preferenceId: Scalars['Int']}


/** input type for updating data in table "preference" */
export interface PreferenceSetInput {chatbotId?: (Scalars['Int'] | null),favorite?: (Scalars['Boolean'] | null),preferenceId?: (Scalars['Int'] | null),preferredComplexity?: (Scalars['String'] | null),preferredLength?: (Scalars['String'] | null),preferredTone?: (Scalars['String'] | null),preferredType?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null)}


/** aggregate stddev on columns */
export interface PreferenceStddevFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "preference" */
export interface PreferenceStddevOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface PreferenceStddevPopFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "preference" */
export interface PreferenceStddevPopOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface PreferenceStddevSampFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "preference" */
export interface PreferenceStddevSampOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null)}


/** Streaming cursor of the table "preference" */
export interface PreferenceStreamCursorInput {
/** Stream column input with initial value */
initialValue: PreferenceStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface PreferenceStreamCursorValueInput {chatbotId?: (Scalars['Int'] | null),favorite?: (Scalars['Boolean'] | null),preferenceId?: (Scalars['Int'] | null),preferredComplexity?: (Scalars['String'] | null),preferredLength?: (Scalars['String'] | null),preferredTone?: (Scalars['String'] | null),preferredType?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null)}


/** aggregate sum on columns */
export interface PreferenceSumFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "preference" */
export interface PreferenceSumOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null)}

export interface PreferenceUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (PreferenceIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (PreferenceSetInput | null),
/** filter the rows which have to be updated */
where: PreferenceBoolExp}


/** aggregate varPop on columns */
export interface PreferenceVarPopFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "preference" */
export interface PreferenceVarPopOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface PreferenceVarSampFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "preference" */
export interface PreferenceVarSampOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null)}


/** aggregate variance on columns */
export interface PreferenceVarianceFieldsGenqlSelection{
    chatbotId?: boolean | number
    preferenceId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "preference" */
export interface PreferenceVarianceOrderBy {chatbotId?: (OrderBy | null),preferenceId?: (OrderBy | null)}


/** columns and relationships of "prompt" */
export interface PromptGenqlSelection{
    /** An array relationship */
    chatbots?: (PromptChatbotGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptChatbotBoolExp | null)} })
    /** An aggregate relationship */
    chatbotsAggregate?: (PromptChatbotAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptChatbotBoolExp | null)} })
    content?: boolean | number
    promptId?: boolean | number
    promptName?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "prompt" */
export interface PromptAggregateGenqlSelection{
    aggregate?: PromptAggregateFieldsGenqlSelection
    nodes?: PromptGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PromptAggregateBoolExp {count?: (promptAggregateBoolExpCount | null)}


/** aggregate fields of "prompt" */
export interface PromptAggregateFieldsGenqlSelection{
    avg?: PromptAvgFieldsGenqlSelection
    count?: { __args: {columns?: (PromptSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: PromptMaxFieldsGenqlSelection
    min?: PromptMinFieldsGenqlSelection
    stddev?: PromptStddevFieldsGenqlSelection
    stddevPop?: PromptStddevPopFieldsGenqlSelection
    stddevSamp?: PromptStddevSampFieldsGenqlSelection
    sum?: PromptSumFieldsGenqlSelection
    varPop?: PromptVarPopFieldsGenqlSelection
    varSamp?: PromptVarSampFieldsGenqlSelection
    variance?: PromptVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "prompt" */
export interface PromptAggregateOrderBy {avg?: (PromptAvgOrderBy | null),count?: (OrderBy | null),max?: (PromptMaxOrderBy | null),min?: (PromptMinOrderBy | null),stddev?: (PromptStddevOrderBy | null),stddevPop?: (PromptStddevPopOrderBy | null),stddevSamp?: (PromptStddevSampOrderBy | null),sum?: (PromptSumOrderBy | null),varPop?: (PromptVarPopOrderBy | null),varSamp?: (PromptVarSampOrderBy | null),variance?: (PromptVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "prompt" */
export interface PromptArrRelInsertInput {data: PromptInsertInput[],
/** upsert condition */
onConflict?: (PromptOnConflict | null)}


/** aggregate avg on columns */
export interface PromptAvgFieldsGenqlSelection{
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "prompt" */
export interface PromptAvgOrderBy {promptId?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "prompt". All fields are combined with a logical 'AND'. */
export interface PromptBoolExp {_and?: (PromptBoolExp[] | null),_not?: (PromptBoolExp | null),_or?: (PromptBoolExp[] | null),chatbots?: (PromptChatbotBoolExp | null),chatbotsAggregate?: (PromptChatbotAggregateBoolExp | null),content?: (StringComparisonExp | null),promptId?: (IntComparisonExp | null),promptName?: (StringComparisonExp | null),type?: (StringComparisonExp | null)}


/** Junction table for prompts/instructions and chatbots. */
export interface PromptChatbotGenqlSelection{
    chabotId?: boolean | number
    /** An object relationship */
    chatbot?: ChatbotGenqlSelection
    /** An object relationship */
    prompt?: PromptGenqlSelection
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "prompt_chatbot" */
export interface PromptChatbotAggregateGenqlSelection{
    aggregate?: PromptChatbotAggregateFieldsGenqlSelection
    nodes?: PromptChatbotGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PromptChatbotAggregateBoolExp {count?: (promptChatbotAggregateBoolExpCount | null)}


/** aggregate fields of "prompt_chatbot" */
export interface PromptChatbotAggregateFieldsGenqlSelection{
    avg?: PromptChatbotAvgFieldsGenqlSelection
    count?: { __args: {columns?: (PromptChatbotSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: PromptChatbotMaxFieldsGenqlSelection
    min?: PromptChatbotMinFieldsGenqlSelection
    stddev?: PromptChatbotStddevFieldsGenqlSelection
    stddevPop?: PromptChatbotStddevPopFieldsGenqlSelection
    stddevSamp?: PromptChatbotStddevSampFieldsGenqlSelection
    sum?: PromptChatbotSumFieldsGenqlSelection
    varPop?: PromptChatbotVarPopFieldsGenqlSelection
    varSamp?: PromptChatbotVarSampFieldsGenqlSelection
    variance?: PromptChatbotVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "prompt_chatbot" */
export interface PromptChatbotAggregateOrderBy {avg?: (PromptChatbotAvgOrderBy | null),count?: (OrderBy | null),max?: (PromptChatbotMaxOrderBy | null),min?: (PromptChatbotMinOrderBy | null),stddev?: (PromptChatbotStddevOrderBy | null),stddevPop?: (PromptChatbotStddevPopOrderBy | null),stddevSamp?: (PromptChatbotStddevSampOrderBy | null),sum?: (PromptChatbotSumOrderBy | null),varPop?: (PromptChatbotVarPopOrderBy | null),varSamp?: (PromptChatbotVarSampOrderBy | null),variance?: (PromptChatbotVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "prompt_chatbot" */
export interface PromptChatbotArrRelInsertInput {data: PromptChatbotInsertInput[],
/** upsert condition */
onConflict?: (PromptChatbotOnConflict | null)}


/** aggregate avg on columns */
export interface PromptChatbotAvgFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "prompt_chatbot" */
export interface PromptChatbotAvgOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "prompt_chatbot". All fields are combined with a logical 'AND'. */
export interface PromptChatbotBoolExp {_and?: (PromptChatbotBoolExp[] | null),_not?: (PromptChatbotBoolExp | null),_or?: (PromptChatbotBoolExp[] | null),chabotId?: (IntComparisonExp | null),chatbot?: (ChatbotBoolExp | null),prompt?: (PromptBoolExp | null),promptId?: (IntComparisonExp | null)}


/** input type for incrementing numeric columns in table "prompt_chatbot" */
export interface PromptChatbotIncInput {chabotId?: (Scalars['Int'] | null),promptId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "prompt_chatbot" */
export interface PromptChatbotInsertInput {chabotId?: (Scalars['Int'] | null),chatbot?: (ChatbotObjRelInsertInput | null),prompt?: (PromptObjRelInsertInput | null),promptId?: (Scalars['Int'] | null)}


/** aggregate max on columns */
export interface PromptChatbotMaxFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "prompt_chatbot" */
export interface PromptChatbotMaxOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}


/** aggregate min on columns */
export interface PromptChatbotMinFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "prompt_chatbot" */
export interface PromptChatbotMinOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}


/** response of any mutation on the table "prompt_chatbot" */
export interface PromptChatbotMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: PromptChatbotGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "prompt_chatbot" */
export interface PromptChatbotOnConflict {constraint: PromptChatbotConstraint,updateColumns?: PromptChatbotUpdateColumn[],where?: (PromptChatbotBoolExp | null)}


/** Ordering options when selecting data from "prompt_chatbot". */
export interface PromptChatbotOrderBy {chabotId?: (OrderBy | null),chatbot?: (ChatbotOrderBy | null),prompt?: (PromptOrderBy | null),promptId?: (OrderBy | null)}


/** primary key columns input for table: prompt_chatbot */
export interface PromptChatbotPkColumnsInput {chabotId: Scalars['Int'],promptId: Scalars['Int']}


/** input type for updating data in table "prompt_chatbot" */
export interface PromptChatbotSetInput {chabotId?: (Scalars['Int'] | null),promptId?: (Scalars['Int'] | null)}


/** aggregate stddev on columns */
export interface PromptChatbotStddevFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "prompt_chatbot" */
export interface PromptChatbotStddevOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface PromptChatbotStddevPopFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "prompt_chatbot" */
export interface PromptChatbotStddevPopOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface PromptChatbotStddevSampFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "prompt_chatbot" */
export interface PromptChatbotStddevSampOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}


/** Streaming cursor of the table "prompt_chatbot" */
export interface PromptChatbotStreamCursorInput {
/** Stream column input with initial value */
initialValue: PromptChatbotStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface PromptChatbotStreamCursorValueInput {chabotId?: (Scalars['Int'] | null),promptId?: (Scalars['Int'] | null)}


/** aggregate sum on columns */
export interface PromptChatbotSumFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "prompt_chatbot" */
export interface PromptChatbotSumOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}

export interface PromptChatbotUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (PromptChatbotIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (PromptChatbotSetInput | null),
/** filter the rows which have to be updated */
where: PromptChatbotBoolExp}


/** aggregate varPop on columns */
export interface PromptChatbotVarPopFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "prompt_chatbot" */
export interface PromptChatbotVarPopOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface PromptChatbotVarSampFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "prompt_chatbot" */
export interface PromptChatbotVarSampOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}


/** aggregate variance on columns */
export interface PromptChatbotVarianceFieldsGenqlSelection{
    chabotId?: boolean | number
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "prompt_chatbot" */
export interface PromptChatbotVarianceOrderBy {chabotId?: (OrderBy | null),promptId?: (OrderBy | null)}


/** input type for incrementing numeric columns in table "prompt" */
export interface PromptIncInput {promptId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "prompt" */
export interface PromptInsertInput {chatbots?: (PromptChatbotArrRelInsertInput | null),content?: (Scalars['String'] | null),promptId?: (Scalars['Int'] | null),promptName?: (Scalars['String'] | null),type?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface PromptMaxFieldsGenqlSelection{
    content?: boolean | number
    promptId?: boolean | number
    promptName?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "prompt" */
export interface PromptMaxOrderBy {content?: (OrderBy | null),promptId?: (OrderBy | null),promptName?: (OrderBy | null),type?: (OrderBy | null)}


/** aggregate min on columns */
export interface PromptMinFieldsGenqlSelection{
    content?: boolean | number
    promptId?: boolean | number
    promptName?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "prompt" */
export interface PromptMinOrderBy {content?: (OrderBy | null),promptId?: (OrderBy | null),promptName?: (OrderBy | null),type?: (OrderBy | null)}


/** response of any mutation on the table "prompt" */
export interface PromptMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: PromptGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "prompt" */
export interface PromptObjRelInsertInput {data: PromptInsertInput,
/** upsert condition */
onConflict?: (PromptOnConflict | null)}


/** on_conflict condition type for table "prompt" */
export interface PromptOnConflict {constraint: PromptConstraint,updateColumns?: PromptUpdateColumn[],where?: (PromptBoolExp | null)}


/** Ordering options when selecting data from "prompt". */
export interface PromptOrderBy {chatbotsAggregate?: (PromptChatbotAggregateOrderBy | null),content?: (OrderBy | null),promptId?: (OrderBy | null),promptName?: (OrderBy | null),type?: (OrderBy | null)}


/** primary key columns input for table: prompt */
export interface PromptPkColumnsInput {promptId: Scalars['Int']}


/** input type for updating data in table "prompt" */
export interface PromptSetInput {content?: (Scalars['String'] | null),promptId?: (Scalars['Int'] | null),promptName?: (Scalars['String'] | null),type?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface PromptStddevFieldsGenqlSelection{
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "prompt" */
export interface PromptStddevOrderBy {promptId?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface PromptStddevPopFieldsGenqlSelection{
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "prompt" */
export interface PromptStddevPopOrderBy {promptId?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface PromptStddevSampFieldsGenqlSelection{
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "prompt" */
export interface PromptStddevSampOrderBy {promptId?: (OrderBy | null)}


/** Streaming cursor of the table "prompt" */
export interface PromptStreamCursorInput {
/** Stream column input with initial value */
initialValue: PromptStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface PromptStreamCursorValueInput {content?: (Scalars['String'] | null),promptId?: (Scalars['Int'] | null),promptName?: (Scalars['String'] | null),type?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface PromptSumFieldsGenqlSelection{
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "prompt" */
export interface PromptSumOrderBy {promptId?: (OrderBy | null)}


/** columns and relationships of "prompt_type_enum" */
export interface PromptTypeEnumGenqlSelection{
    /** An array relationship */
    prompts?: (PromptGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptBoolExp | null)} })
    /** An aggregate relationship */
    promptsAggregate?: (PromptAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptBoolExp | null)} })
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "prompt_type_enum" */
export interface PromptTypeEnumAggregateGenqlSelection{
    aggregate?: PromptTypeEnumAggregateFieldsGenqlSelection
    nodes?: PromptTypeEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "prompt_type_enum" */
export interface PromptTypeEnumAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (PromptTypeEnumSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: PromptTypeEnumMaxFieldsGenqlSelection
    min?: PromptTypeEnumMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "prompt_type_enum". All fields are combined with a logical 'AND'. */
export interface PromptTypeEnumBoolExp {_and?: (PromptTypeEnumBoolExp[] | null),_not?: (PromptTypeEnumBoolExp | null),_or?: (PromptTypeEnumBoolExp[] | null),prompts?: (PromptBoolExp | null),promptsAggregate?: (PromptAggregateBoolExp | null),value?: (StringComparisonExp | null)}


/** input type for inserting data into table "prompt_type_enum" */
export interface PromptTypeEnumInsertInput {prompts?: (PromptArrRelInsertInput | null),value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface PromptTypeEnumMaxFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface PromptTypeEnumMinFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "prompt_type_enum" */
export interface PromptTypeEnumMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: PromptTypeEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "prompt_type_enum" */
export interface PromptTypeEnumOnConflict {constraint: PromptTypeEnumConstraint,updateColumns?: PromptTypeEnumUpdateColumn[],where?: (PromptTypeEnumBoolExp | null)}


/** Ordering options when selecting data from "prompt_type_enum". */
export interface PromptTypeEnumOrderBy {promptsAggregate?: (PromptAggregateOrderBy | null),value?: (OrderBy | null)}


/** primary key columns input for table: prompt_type_enum */
export interface PromptTypeEnumPkColumnsInput {value: Scalars['String']}


/** input type for updating data in table "prompt_type_enum" */
export interface PromptTypeEnumSetInput {value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "prompt_type_enum" */
export interface PromptTypeEnumStreamCursorInput {
/** Stream column input with initial value */
initialValue: PromptTypeEnumStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface PromptTypeEnumStreamCursorValueInput {value?: (Scalars['String'] | null)}

export interface PromptTypeEnumUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (PromptTypeEnumSetInput | null),
/** filter the rows which have to be updated */
where: PromptTypeEnumBoolExp}

export interface PromptUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (PromptIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (PromptSetInput | null),
/** filter the rows which have to be updated */
where: PromptBoolExp}


/** aggregate varPop on columns */
export interface PromptVarPopFieldsGenqlSelection{
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "prompt" */
export interface PromptVarPopOrderBy {promptId?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface PromptVarSampFieldsGenqlSelection{
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "prompt" */
export interface PromptVarSampOrderBy {promptId?: (OrderBy | null)}


/** aggregate variance on columns */
export interface PromptVarianceFieldsGenqlSelection{
    promptId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "prompt" */
export interface PromptVarianceOrderBy {promptId?: (OrderBy | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface StringComparisonExp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_isNull?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "thread" */
export interface ThreadGenqlSelection{
    /** An object relationship */
    chatbot?: ChatbotGenqlSelection
    chatbotId?: boolean | number
    createdAt?: boolean | number
    /** An array relationship */
    messages?: (MessageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** An aggregate relationship */
    messagesAggregate?: (MessageAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    threadId?: boolean | number
    updatedAt?: boolean | number
    /** An object relationship */
    user?: UserGenqlSelection
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "thread" */
export interface ThreadAggregateGenqlSelection{
    aggregate?: ThreadAggregateFieldsGenqlSelection
    nodes?: ThreadGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ThreadAggregateBoolExp {count?: (threadAggregateBoolExpCount | null)}


/** aggregate fields of "thread" */
export interface ThreadAggregateFieldsGenqlSelection{
    avg?: ThreadAvgFieldsGenqlSelection
    count?: { __args: {columns?: (ThreadSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: ThreadMaxFieldsGenqlSelection
    min?: ThreadMinFieldsGenqlSelection
    stddev?: ThreadStddevFieldsGenqlSelection
    stddevPop?: ThreadStddevPopFieldsGenqlSelection
    stddevSamp?: ThreadStddevSampFieldsGenqlSelection
    sum?: ThreadSumFieldsGenqlSelection
    varPop?: ThreadVarPopFieldsGenqlSelection
    varSamp?: ThreadVarSampFieldsGenqlSelection
    variance?: ThreadVarianceFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "thread" */
export interface ThreadAggregateOrderBy {avg?: (ThreadAvgOrderBy | null),count?: (OrderBy | null),max?: (ThreadMaxOrderBy | null),min?: (ThreadMinOrderBy | null),stddev?: (ThreadStddevOrderBy | null),stddevPop?: (ThreadStddevPopOrderBy | null),stddevSamp?: (ThreadStddevSampOrderBy | null),sum?: (ThreadSumOrderBy | null),varPop?: (ThreadVarPopOrderBy | null),varSamp?: (ThreadVarSampOrderBy | null),variance?: (ThreadVarianceOrderBy | null)}


/** input type for inserting array relation for remote table "thread" */
export interface ThreadArrRelInsertInput {data: ThreadInsertInput[],
/** upsert condition */
onConflict?: (ThreadOnConflict | null)}


/** aggregate avg on columns */
export interface ThreadAvgFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "thread" */
export interface ThreadAvgOrderBy {chatbotId?: (OrderBy | null)}


/** Boolean expression to filter rows from the table "thread". All fields are combined with a logical 'AND'. */
export interface ThreadBoolExp {_and?: (ThreadBoolExp[] | null),_not?: (ThreadBoolExp | null),_or?: (ThreadBoolExp[] | null),chatbot?: (ChatbotBoolExp | null),chatbotId?: (IntComparisonExp | null),createdAt?: (TimestamptzComparisonExp | null),messages?: (MessageBoolExp | null),messagesAggregate?: (MessageAggregateBoolExp | null),threadId?: (UuidComparisonExp | null),updatedAt?: (TimestamptzComparisonExp | null),user?: (UserBoolExp | null),userId?: (UuidComparisonExp | null)}


/** input type for incrementing numeric columns in table "thread" */
export interface ThreadIncInput {chatbotId?: (Scalars['Int'] | null)}


/** input type for inserting data into table "thread" */
export interface ThreadInsertInput {chatbot?: (ChatbotObjRelInsertInput | null),chatbotId?: (Scalars['Int'] | null),createdAt?: (Scalars['timestamptz'] | null),messages?: (MessageArrRelInsertInput | null),threadId?: (Scalars['uuid'] | null),updatedAt?: (Scalars['timestamptz'] | null),user?: (UserObjRelInsertInput | null),userId?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface ThreadMaxFieldsGenqlSelection{
    chatbotId?: boolean | number
    createdAt?: boolean | number
    threadId?: boolean | number
    updatedAt?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "thread" */
export interface ThreadMaxOrderBy {chatbotId?: (OrderBy | null),createdAt?: (OrderBy | null),threadId?: (OrderBy | null),updatedAt?: (OrderBy | null),userId?: (OrderBy | null)}


/** aggregate min on columns */
export interface ThreadMinFieldsGenqlSelection{
    chatbotId?: boolean | number
    createdAt?: boolean | number
    threadId?: boolean | number
    updatedAt?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "thread" */
export interface ThreadMinOrderBy {chatbotId?: (OrderBy | null),createdAt?: (OrderBy | null),threadId?: (OrderBy | null),updatedAt?: (OrderBy | null),userId?: (OrderBy | null)}


/** response of any mutation on the table "thread" */
export interface ThreadMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ThreadGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "thread" */
export interface ThreadObjRelInsertInput {data: ThreadInsertInput,
/** upsert condition */
onConflict?: (ThreadOnConflict | null)}


/** on_conflict condition type for table "thread" */
export interface ThreadOnConflict {constraint: ThreadConstraint,updateColumns?: ThreadUpdateColumn[],where?: (ThreadBoolExp | null)}


/** Ordering options when selecting data from "thread". */
export interface ThreadOrderBy {chatbot?: (ChatbotOrderBy | null),chatbotId?: (OrderBy | null),createdAt?: (OrderBy | null),messagesAggregate?: (MessageAggregateOrderBy | null),threadId?: (OrderBy | null),updatedAt?: (OrderBy | null),user?: (UserOrderBy | null),userId?: (OrderBy | null)}


/** primary key columns input for table: thread */
export interface ThreadPkColumnsInput {threadId: Scalars['uuid']}


/** input type for updating data in table "thread" */
export interface ThreadSetInput {chatbotId?: (Scalars['Int'] | null),createdAt?: (Scalars['timestamptz'] | null),threadId?: (Scalars['uuid'] | null),updatedAt?: (Scalars['timestamptz'] | null),userId?: (Scalars['uuid'] | null)}


/** aggregate stddev on columns */
export interface ThreadStddevFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "thread" */
export interface ThreadStddevOrderBy {chatbotId?: (OrderBy | null)}


/** aggregate stddevPop on columns */
export interface ThreadStddevPopFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevPop() on columns of table "thread" */
export interface ThreadStddevPopOrderBy {chatbotId?: (OrderBy | null)}


/** aggregate stddevSamp on columns */
export interface ThreadStddevSampFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddevSamp() on columns of table "thread" */
export interface ThreadStddevSampOrderBy {chatbotId?: (OrderBy | null)}


/** Streaming cursor of the table "thread" */
export interface ThreadStreamCursorInput {
/** Stream column input with initial value */
initialValue: ThreadStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface ThreadStreamCursorValueInput {chatbotId?: (Scalars['Int'] | null),createdAt?: (Scalars['timestamptz'] | null),threadId?: (Scalars['uuid'] | null),updatedAt?: (Scalars['timestamptz'] | null),userId?: (Scalars['uuid'] | null)}


/** aggregate sum on columns */
export interface ThreadSumFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "thread" */
export interface ThreadSumOrderBy {chatbotId?: (OrderBy | null)}

export interface ThreadUpdates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (ThreadIncInput | null),
/** sets the columns of the filtered rows to the given values */
_set?: (ThreadSetInput | null),
/** filter the rows which have to be updated */
where: ThreadBoolExp}


/** aggregate varPop on columns */
export interface ThreadVarPopFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varPop() on columns of table "thread" */
export interface ThreadVarPopOrderBy {chatbotId?: (OrderBy | null)}


/** aggregate varSamp on columns */
export interface ThreadVarSampFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by varSamp() on columns of table "thread" */
export interface ThreadVarSampOrderBy {chatbotId?: (OrderBy | null)}


/** aggregate variance on columns */
export interface ThreadVarianceFieldsGenqlSelection{
    chatbotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "thread" */
export interface ThreadVarianceOrderBy {chatbotId?: (OrderBy | null)}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "tone_enum" */
export interface ToneEnumGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "tone_enum" */
export interface ToneEnumAggregateGenqlSelection{
    aggregate?: ToneEnumAggregateFieldsGenqlSelection
    nodes?: ToneEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "tone_enum" */
export interface ToneEnumAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (ToneEnumSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: ToneEnumMaxFieldsGenqlSelection
    min?: ToneEnumMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "tone_enum". All fields are combined with a logical 'AND'. */
export interface ToneEnumBoolExp {_and?: (ToneEnumBoolExp[] | null),_not?: (ToneEnumBoolExp | null),_or?: (ToneEnumBoolExp[] | null),value?: (StringComparisonExp | null)}


/** input type for inserting data into table "tone_enum" */
export interface ToneEnumInsertInput {value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface ToneEnumMaxFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface ToneEnumMinFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "tone_enum" */
export interface ToneEnumMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ToneEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "tone_enum" */
export interface ToneEnumOnConflict {constraint: ToneEnumConstraint,updateColumns?: ToneEnumUpdateColumn[],where?: (ToneEnumBoolExp | null)}


/** Ordering options when selecting data from "tone_enum". */
export interface ToneEnumOrderBy {value?: (OrderBy | null)}


/** primary key columns input for table: tone_enum */
export interface ToneEnumPkColumnsInput {value: Scalars['String']}


/** input type for updating data in table "tone_enum" */
export interface ToneEnumSetInput {value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "tone_enum" */
export interface ToneEnumStreamCursorInput {
/** Stream column input with initial value */
initialValue: ToneEnumStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface ToneEnumStreamCursorValueInput {value?: (Scalars['String'] | null)}

export interface ToneEnumUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (ToneEnumSetInput | null),
/** filter the rows which have to be updated */
where: ToneEnumBoolExp}


/** columns and relationships of "type_enum" */
export interface TypeEnumGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "type_enum" */
export interface TypeEnumAggregateGenqlSelection{
    aggregate?: TypeEnumAggregateFieldsGenqlSelection
    nodes?: TypeEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "type_enum" */
export interface TypeEnumAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (TypeEnumSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: TypeEnumMaxFieldsGenqlSelection
    min?: TypeEnumMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "type_enum". All fields are combined with a logical 'AND'. */
export interface TypeEnumBoolExp {_and?: (TypeEnumBoolExp[] | null),_not?: (TypeEnumBoolExp | null),_or?: (TypeEnumBoolExp[] | null),value?: (StringComparisonExp | null)}


/** input type for inserting data into table "type_enum" */
export interface TypeEnumInsertInput {value?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface TypeEnumMaxFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface TypeEnumMinFieldsGenqlSelection{
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "type_enum" */
export interface TypeEnumMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: TypeEnumGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "type_enum" */
export interface TypeEnumOnConflict {constraint: TypeEnumConstraint,updateColumns?: TypeEnumUpdateColumn[],where?: (TypeEnumBoolExp | null)}


/** Ordering options when selecting data from "type_enum". */
export interface TypeEnumOrderBy {value?: (OrderBy | null)}


/** primary key columns input for table: type_enum */
export interface TypeEnumPkColumnsInput {value: Scalars['String']}


/** input type for updating data in table "type_enum" */
export interface TypeEnumSetInput {value?: (Scalars['String'] | null)}


/** Streaming cursor of the table "type_enum" */
export interface TypeEnumStreamCursorInput {
/** Stream column input with initial value */
initialValue: TypeEnumStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface TypeEnumStreamCursorValueInput {value?: (Scalars['String'] | null)}

export interface TypeEnumUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (TypeEnumSetInput | null),
/** filter the rows which have to be updated */
where: TypeEnumBoolExp}


/** Table storing information about registered users. */
export interface UserGenqlSelection{
    /** An array relationship */
    chats?: (ChatGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatBoolExp | null)} })
    /** An aggregate relationship */
    chatsAggregate?: (ChatAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatBoolExp | null)} })
    dateJoined?: boolean | number
    email?: boolean | number
    lastLogin?: boolean | number
    password?: boolean | number
    /** An array relationship */
    preferences?: (PreferenceGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PreferenceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PreferenceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PreferenceBoolExp | null)} })
    /** An aggregate relationship */
    preferencesAggregate?: (PreferenceAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PreferenceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PreferenceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PreferenceBoolExp | null)} })
    profilePicture?: boolean | number
    /** An array relationship */
    threads?: (ThreadGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ThreadSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ThreadOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ThreadBoolExp | null)} })
    /** An aggregate relationship */
    threadsAggregate?: (ThreadAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ThreadSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ThreadOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ThreadBoolExp | null)} })
    userId?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "user" */
export interface UserAggregateGenqlSelection{
    aggregate?: UserAggregateFieldsGenqlSelection
    nodes?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "user" */
export interface UserAggregateFieldsGenqlSelection{
    count?: { __args: {columns?: (UserSelectColumn[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: UserMaxFieldsGenqlSelection
    min?: UserMinFieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface UserBoolExp {_and?: (UserBoolExp[] | null),_not?: (UserBoolExp | null),_or?: (UserBoolExp[] | null),chats?: (ChatBoolExp | null),chatsAggregate?: (ChatAggregateBoolExp | null),dateJoined?: (TimestamptzComparisonExp | null),email?: (StringComparisonExp | null),lastLogin?: (TimestamptzComparisonExp | null),password?: (StringComparisonExp | null),preferences?: (PreferenceBoolExp | null),preferencesAggregate?: (PreferenceAggregateBoolExp | null),profilePicture?: (StringComparisonExp | null),threads?: (ThreadBoolExp | null),threadsAggregate?: (ThreadAggregateBoolExp | null),userId?: (UuidComparisonExp | null),username?: (StringComparisonExp | null)}


/** input type for inserting data into table "user" */
export interface UserInsertInput {chats?: (ChatArrRelInsertInput | null),dateJoined?: (Scalars['timestamptz'] | null),email?: (Scalars['String'] | null),lastLogin?: (Scalars['timestamptz'] | null),password?: (Scalars['String'] | null),preferences?: (PreferenceArrRelInsertInput | null),profilePicture?: (Scalars['String'] | null),threads?: (ThreadArrRelInsertInput | null),userId?: (Scalars['uuid'] | null),username?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface UserMaxFieldsGenqlSelection{
    dateJoined?: boolean | number
    email?: boolean | number
    lastLogin?: boolean | number
    password?: boolean | number
    profilePicture?: boolean | number
    userId?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface UserMinFieldsGenqlSelection{
    dateJoined?: boolean | number
    email?: boolean | number
    lastLogin?: boolean | number
    password?: boolean | number
    profilePicture?: boolean | number
    userId?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "user" */
export interface UserMutationResponseGenqlSelection{
    /** number of rows affected by the mutation */
    affectedRows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "user" */
export interface UserObjRelInsertInput {data: UserInsertInput,
/** upsert condition */
onConflict?: (UserOnConflict | null)}


/** on_conflict condition type for table "user" */
export interface UserOnConflict {constraint: UserConstraint,updateColumns?: UserUpdateColumn[],where?: (UserBoolExp | null)}


/** Ordering options when selecting data from "user". */
export interface UserOrderBy {chatsAggregate?: (ChatAggregateOrderBy | null),dateJoined?: (OrderBy | null),email?: (OrderBy | null),lastLogin?: (OrderBy | null),password?: (OrderBy | null),preferencesAggregate?: (PreferenceAggregateOrderBy | null),profilePicture?: (OrderBy | null),threadsAggregate?: (ThreadAggregateOrderBy | null),userId?: (OrderBy | null),username?: (OrderBy | null)}


/** primary key columns input for table: user */
export interface UserPkColumnsInput {userId: Scalars['uuid']}


/** input type for updating data in table "user" */
export interface UserSetInput {dateJoined?: (Scalars['timestamptz'] | null),email?: (Scalars['String'] | null),lastLogin?: (Scalars['timestamptz'] | null),password?: (Scalars['String'] | null),profilePicture?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null),username?: (Scalars['String'] | null)}


/** Streaming cursor of the table "user" */
export interface UserStreamCursorInput {
/** Stream column input with initial value */
initialValue: UserStreamCursorValueInput,
/** cursor ordering */
ordering?: (CursorOrdering | null)}


/** Initial value of the column from where the streaming should start */
export interface UserStreamCursorValueInput {dateJoined?: (Scalars['timestamptz'] | null),email?: (Scalars['String'] | null),lastLogin?: (Scalars['timestamptz'] | null),password?: (Scalars['String'] | null),profilePicture?: (Scalars['String'] | null),userId?: (Scalars['uuid'] | null),username?: (Scalars['String'] | null)}

export interface UserUpdates {
/** sets the columns of the filtered rows to the given values */
_set?: (UserSetInput | null),
/** filter the rows which have to be updated */
where: UserBoolExp}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_isNull?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export interface chatAggregateBoolExpCount {arguments?: (ChatSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (ChatBoolExp | null),predicate: IntComparisonExp}

export interface chatbotCategoryAggregateBoolExpCount {arguments?: (ChatbotCategorySelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (ChatbotCategoryBoolExp | null),predicate: IntComparisonExp}

export interface messageAggregateBoolExpCount {arguments?: (MessageSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (MessageBoolExp | null),predicate: IntComparisonExp}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete data from the table: "category" */
    deleteCategory?: (CategoryMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: CategoryBoolExp} })
    /** delete single row from the table: "category" */
    deleteCategoryByPk?: (CategoryGenqlSelection & { __args: {categoryId: Scalars['Int']} })
    /** delete data from the table: "chat" */
    deleteChat?: (ChatMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: ChatBoolExp} })
    /** delete single row from the table: "chat" */
    deleteChatByPk?: (ChatGenqlSelection & { __args: {chatId: Scalars['Int']} })
    /** delete data from the table: "chatbot" */
    deleteChatbot?: (ChatbotMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: ChatbotBoolExp} })
    /** delete single row from the table: "chatbot" */
    deleteChatbotByPk?: (ChatbotGenqlSelection & { __args: {chatbotId: Scalars['Int']} })
    /** delete data from the table: "chatbot_category" */
    deleteChatbotCategory?: (ChatbotCategoryMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: ChatbotCategoryBoolExp} })
    /** delete single row from the table: "chatbot_category" */
    deleteChatbotCategoryByPk?: (ChatbotCategoryGenqlSelection & { __args: {categoryId: Scalars['Int'], chatbotId: Scalars['Int']} })
    /** delete data from the table: "complexity_enum" */
    deleteComplexityEnum?: (ComplexityEnumMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: ComplexityEnumBoolExp} })
    /** delete single row from the table: "complexity_enum" */
    deleteComplexityEnumByPk?: (ComplexityEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "length_enum" */
    deleteLengthEnum?: (LengthEnumMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: LengthEnumBoolExp} })
    /** delete single row from the table: "length_enum" */
    deleteLengthEnumByPk?: (LengthEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "message" */
    deleteMessage?: (MessageMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: MessageBoolExp} })
    /** delete single row from the table: "message" */
    deleteMessageByPk?: (MessageGenqlSelection & { __args: {messageId: Scalars['uuid']} })
    /** delete data from the table: "message_type_enum" */
    deleteMessageTypeEnum?: (MessageTypeEnumMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: MessageTypeEnumBoolExp} })
    /** delete single row from the table: "message_type_enum" */
    deleteMessageTypeEnumByPk?: (MessageTypeEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "preference" */
    deletePreference?: (PreferenceMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: PreferenceBoolExp} })
    /** delete single row from the table: "preference" */
    deletePreferenceByPk?: (PreferenceGenqlSelection & { __args: {preferenceId: Scalars['Int']} })
    /** delete data from the table: "prompt" */
    deletePrompt?: (PromptMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: PromptBoolExp} })
    /** delete single row from the table: "prompt" */
    deletePromptByPk?: (PromptGenqlSelection & { __args: {promptId: Scalars['Int']} })
    /** delete data from the table: "prompt_chatbot" */
    deletePromptChatbot?: (PromptChatbotMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: PromptChatbotBoolExp} })
    /** delete single row from the table: "prompt_chatbot" */
    deletePromptChatbotByPk?: (PromptChatbotGenqlSelection & { __args: {chabotId: Scalars['Int'], promptId: Scalars['Int']} })
    /** delete data from the table: "prompt_type_enum" */
    deletePromptTypeEnum?: (PromptTypeEnumMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: PromptTypeEnumBoolExp} })
    /** delete single row from the table: "prompt_type_enum" */
    deletePromptTypeEnumByPk?: (PromptTypeEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "thread" */
    deleteThread?: (ThreadMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: ThreadBoolExp} })
    /** delete single row from the table: "thread" */
    deleteThreadByPk?: (ThreadGenqlSelection & { __args: {threadId: Scalars['uuid']} })
    /** delete data from the table: "tone_enum" */
    deleteToneEnum?: (ToneEnumMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: ToneEnumBoolExp} })
    /** delete single row from the table: "tone_enum" */
    deleteToneEnumByPk?: (ToneEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "type_enum" */
    deleteTypeEnum?: (TypeEnumMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: TypeEnumBoolExp} })
    /** delete single row from the table: "type_enum" */
    deleteTypeEnumByPk?: (TypeEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** delete data from the table: "user" */
    deleteUser?: (UserMutationResponseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: UserBoolExp} })
    /** delete single row from the table: "user" */
    deleteUserByPk?: (UserGenqlSelection & { __args: {userId: Scalars['uuid']} })
    /** insert data into the table: "category" */
    insertCategory?: (CategoryMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: CategoryInsertInput[], 
    /** upsert condition */
    onConflict?: (CategoryOnConflict | null)} })
    /** insert a single row into the table: "category" */
    insertCategoryOne?: (CategoryGenqlSelection & { __args: {
    /** the row to be inserted */
    object: CategoryInsertInput, 
    /** upsert condition */
    onConflict?: (CategoryOnConflict | null)} })
    /** insert data into the table: "chat" */
    insertChat?: (ChatMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: ChatInsertInput[], 
    /** upsert condition */
    onConflict?: (ChatOnConflict | null)} })
    /** insert a single row into the table: "chat" */
    insertChatOne?: (ChatGenqlSelection & { __args: {
    /** the row to be inserted */
    object: ChatInsertInput, 
    /** upsert condition */
    onConflict?: (ChatOnConflict | null)} })
    /** insert data into the table: "chatbot" */
    insertChatbot?: (ChatbotMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: ChatbotInsertInput[], 
    /** upsert condition */
    onConflict?: (ChatbotOnConflict | null)} })
    /** insert data into the table: "chatbot_category" */
    insertChatbotCategory?: (ChatbotCategoryMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: ChatbotCategoryInsertInput[], 
    /** upsert condition */
    onConflict?: (ChatbotCategoryOnConflict | null)} })
    /** insert a single row into the table: "chatbot_category" */
    insertChatbotCategoryOne?: (ChatbotCategoryGenqlSelection & { __args: {
    /** the row to be inserted */
    object: ChatbotCategoryInsertInput, 
    /** upsert condition */
    onConflict?: (ChatbotCategoryOnConflict | null)} })
    /** insert a single row into the table: "chatbot" */
    insertChatbotOne?: (ChatbotGenqlSelection & { __args: {
    /** the row to be inserted */
    object: ChatbotInsertInput, 
    /** upsert condition */
    onConflict?: (ChatbotOnConflict | null)} })
    /** insert data into the table: "complexity_enum" */
    insertComplexityEnum?: (ComplexityEnumMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: ComplexityEnumInsertInput[], 
    /** upsert condition */
    onConflict?: (ComplexityEnumOnConflict | null)} })
    /** insert a single row into the table: "complexity_enum" */
    insertComplexityEnumOne?: (ComplexityEnumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: ComplexityEnumInsertInput, 
    /** upsert condition */
    onConflict?: (ComplexityEnumOnConflict | null)} })
    /** insert data into the table: "length_enum" */
    insertLengthEnum?: (LengthEnumMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: LengthEnumInsertInput[], 
    /** upsert condition */
    onConflict?: (LengthEnumOnConflict | null)} })
    /** insert a single row into the table: "length_enum" */
    insertLengthEnumOne?: (LengthEnumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: LengthEnumInsertInput, 
    /** upsert condition */
    onConflict?: (LengthEnumOnConflict | null)} })
    /** insert data into the table: "message" */
    insertMessage?: (MessageMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: MessageInsertInput[], 
    /** upsert condition */
    onConflict?: (MessageOnConflict | null)} })
    /** insert a single row into the table: "message" */
    insertMessageOne?: (MessageGenqlSelection & { __args: {
    /** the row to be inserted */
    object: MessageInsertInput, 
    /** upsert condition */
    onConflict?: (MessageOnConflict | null)} })
    /** insert data into the table: "message_type_enum" */
    insertMessageTypeEnum?: (MessageTypeEnumMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: MessageTypeEnumInsertInput[], 
    /** upsert condition */
    onConflict?: (MessageTypeEnumOnConflict | null)} })
    /** insert a single row into the table: "message_type_enum" */
    insertMessageTypeEnumOne?: (MessageTypeEnumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: MessageTypeEnumInsertInput, 
    /** upsert condition */
    onConflict?: (MessageTypeEnumOnConflict | null)} })
    /** insert data into the table: "preference" */
    insertPreference?: (PreferenceMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: PreferenceInsertInput[], 
    /** upsert condition */
    onConflict?: (PreferenceOnConflict | null)} })
    /** insert a single row into the table: "preference" */
    insertPreferenceOne?: (PreferenceGenqlSelection & { __args: {
    /** the row to be inserted */
    object: PreferenceInsertInput, 
    /** upsert condition */
    onConflict?: (PreferenceOnConflict | null)} })
    /** insert data into the table: "prompt" */
    insertPrompt?: (PromptMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: PromptInsertInput[], 
    /** upsert condition */
    onConflict?: (PromptOnConflict | null)} })
    /** insert data into the table: "prompt_chatbot" */
    insertPromptChatbot?: (PromptChatbotMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: PromptChatbotInsertInput[], 
    /** upsert condition */
    onConflict?: (PromptChatbotOnConflict | null)} })
    /** insert a single row into the table: "prompt_chatbot" */
    insertPromptChatbotOne?: (PromptChatbotGenqlSelection & { __args: {
    /** the row to be inserted */
    object: PromptChatbotInsertInput, 
    /** upsert condition */
    onConflict?: (PromptChatbotOnConflict | null)} })
    /** insert a single row into the table: "prompt" */
    insertPromptOne?: (PromptGenqlSelection & { __args: {
    /** the row to be inserted */
    object: PromptInsertInput, 
    /** upsert condition */
    onConflict?: (PromptOnConflict | null)} })
    /** insert data into the table: "prompt_type_enum" */
    insertPromptTypeEnum?: (PromptTypeEnumMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: PromptTypeEnumInsertInput[], 
    /** upsert condition */
    onConflict?: (PromptTypeEnumOnConflict | null)} })
    /** insert a single row into the table: "prompt_type_enum" */
    insertPromptTypeEnumOne?: (PromptTypeEnumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: PromptTypeEnumInsertInput, 
    /** upsert condition */
    onConflict?: (PromptTypeEnumOnConflict | null)} })
    /** insert data into the table: "thread" */
    insertThread?: (ThreadMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: ThreadInsertInput[], 
    /** upsert condition */
    onConflict?: (ThreadOnConflict | null)} })
    /** insert a single row into the table: "thread" */
    insertThreadOne?: (ThreadGenqlSelection & { __args: {
    /** the row to be inserted */
    object: ThreadInsertInput, 
    /** upsert condition */
    onConflict?: (ThreadOnConflict | null)} })
    /** insert data into the table: "tone_enum" */
    insertToneEnum?: (ToneEnumMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: ToneEnumInsertInput[], 
    /** upsert condition */
    onConflict?: (ToneEnumOnConflict | null)} })
    /** insert a single row into the table: "tone_enum" */
    insertToneEnumOne?: (ToneEnumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: ToneEnumInsertInput, 
    /** upsert condition */
    onConflict?: (ToneEnumOnConflict | null)} })
    /** insert data into the table: "type_enum" */
    insertTypeEnum?: (TypeEnumMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: TypeEnumInsertInput[], 
    /** upsert condition */
    onConflict?: (TypeEnumOnConflict | null)} })
    /** insert a single row into the table: "type_enum" */
    insertTypeEnumOne?: (TypeEnumGenqlSelection & { __args: {
    /** the row to be inserted */
    object: TypeEnumInsertInput, 
    /** upsert condition */
    onConflict?: (TypeEnumOnConflict | null)} })
    /** insert data into the table: "user" */
    insertUser?: (UserMutationResponseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: UserInsertInput[], 
    /** upsert condition */
    onConflict?: (UserOnConflict | null)} })
    /** insert a single row into the table: "user" */
    insertUserOne?: (UserGenqlSelection & { __args: {
    /** the row to be inserted */
    object: UserInsertInput, 
    /** upsert condition */
    onConflict?: (UserOnConflict | null)} })
    /** update data of the table: "category" */
    updateCategory?: (CategoryMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (CategoryIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (CategorySetInput | null), 
    /** filter the rows which have to be updated */
    where: CategoryBoolExp} })
    /** update single row of the table: "category" */
    updateCategoryByPk?: (CategoryGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (CategoryIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (CategorySetInput | null), pkColumns: CategoryPkColumnsInput} })
    /** update multiples rows of table: "category" */
    updateCategoryMany?: (CategoryMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: CategoryUpdates[]} })
    /** update data of the table: "chat" */
    updateChat?: (ChatMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ChatIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (ChatSetInput | null), 
    /** filter the rows which have to be updated */
    where: ChatBoolExp} })
    /** update single row of the table: "chat" */
    updateChatByPk?: (ChatGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ChatIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (ChatSetInput | null), pkColumns: ChatPkColumnsInput} })
    /** update multiples rows of table: "chat" */
    updateChatMany?: (ChatMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: ChatUpdates[]} })
    /** update data of the table: "chatbot" */
    updateChatbot?: (ChatbotMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ChatbotIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (ChatbotSetInput | null), 
    /** filter the rows which have to be updated */
    where: ChatbotBoolExp} })
    /** update single row of the table: "chatbot" */
    updateChatbotByPk?: (ChatbotGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ChatbotIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (ChatbotSetInput | null), pkColumns: ChatbotPkColumnsInput} })
    /** update data of the table: "chatbot_category" */
    updateChatbotCategory?: (ChatbotCategoryMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ChatbotCategoryIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (ChatbotCategorySetInput | null), 
    /** filter the rows which have to be updated */
    where: ChatbotCategoryBoolExp} })
    /** update single row of the table: "chatbot_category" */
    updateChatbotCategoryByPk?: (ChatbotCategoryGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ChatbotCategoryIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (ChatbotCategorySetInput | null), pkColumns: ChatbotCategoryPkColumnsInput} })
    /** update multiples rows of table: "chatbot_category" */
    updateChatbotCategoryMany?: (ChatbotCategoryMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: ChatbotCategoryUpdates[]} })
    /** update multiples rows of table: "chatbot" */
    updateChatbotMany?: (ChatbotMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: ChatbotUpdates[]} })
    /** update data of the table: "complexity_enum" */
    updateComplexityEnum?: (ComplexityEnumMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (ComplexityEnumSetInput | null), 
    /** filter the rows which have to be updated */
    where: ComplexityEnumBoolExp} })
    /** update single row of the table: "complexity_enum" */
    updateComplexityEnumByPk?: (ComplexityEnumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (ComplexityEnumSetInput | null), pkColumns: ComplexityEnumPkColumnsInput} })
    /** update multiples rows of table: "complexity_enum" */
    updateComplexityEnumMany?: (ComplexityEnumMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: ComplexityEnumUpdates[]} })
    /** update data of the table: "length_enum" */
    updateLengthEnum?: (LengthEnumMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (LengthEnumSetInput | null), 
    /** filter the rows which have to be updated */
    where: LengthEnumBoolExp} })
    /** update single row of the table: "length_enum" */
    updateLengthEnumByPk?: (LengthEnumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (LengthEnumSetInput | null), pkColumns: LengthEnumPkColumnsInput} })
    /** update multiples rows of table: "length_enum" */
    updateLengthEnumMany?: (LengthEnumMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: LengthEnumUpdates[]} })
    /** update data of the table: "message" */
    updateMessage?: (MessageMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (MessageSetInput | null), 
    /** filter the rows which have to be updated */
    where: MessageBoolExp} })
    /** update single row of the table: "message" */
    updateMessageByPk?: (MessageGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (MessageSetInput | null), pkColumns: MessagePkColumnsInput} })
    /** update multiples rows of table: "message" */
    updateMessageMany?: (MessageMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: MessageUpdates[]} })
    /** update data of the table: "message_type_enum" */
    updateMessageTypeEnum?: (MessageTypeEnumMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (MessageTypeEnumSetInput | null), 
    /** filter the rows which have to be updated */
    where: MessageTypeEnumBoolExp} })
    /** update single row of the table: "message_type_enum" */
    updateMessageTypeEnumByPk?: (MessageTypeEnumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (MessageTypeEnumSetInput | null), pkColumns: MessageTypeEnumPkColumnsInput} })
    /** update multiples rows of table: "message_type_enum" */
    updateMessageTypeEnumMany?: (MessageTypeEnumMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: MessageTypeEnumUpdates[]} })
    /** update data of the table: "preference" */
    updatePreference?: (PreferenceMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (PreferenceIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (PreferenceSetInput | null), 
    /** filter the rows which have to be updated */
    where: PreferenceBoolExp} })
    /** update single row of the table: "preference" */
    updatePreferenceByPk?: (PreferenceGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (PreferenceIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (PreferenceSetInput | null), pkColumns: PreferencePkColumnsInput} })
    /** update multiples rows of table: "preference" */
    updatePreferenceMany?: (PreferenceMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: PreferenceUpdates[]} })
    /** update data of the table: "prompt" */
    updatePrompt?: (PromptMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (PromptIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (PromptSetInput | null), 
    /** filter the rows which have to be updated */
    where: PromptBoolExp} })
    /** update single row of the table: "prompt" */
    updatePromptByPk?: (PromptGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (PromptIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (PromptSetInput | null), pkColumns: PromptPkColumnsInput} })
    /** update data of the table: "prompt_chatbot" */
    updatePromptChatbot?: (PromptChatbotMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (PromptChatbotIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (PromptChatbotSetInput | null), 
    /** filter the rows which have to be updated */
    where: PromptChatbotBoolExp} })
    /** update single row of the table: "prompt_chatbot" */
    updatePromptChatbotByPk?: (PromptChatbotGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (PromptChatbotIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (PromptChatbotSetInput | null), pkColumns: PromptChatbotPkColumnsInput} })
    /** update multiples rows of table: "prompt_chatbot" */
    updatePromptChatbotMany?: (PromptChatbotMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: PromptChatbotUpdates[]} })
    /** update multiples rows of table: "prompt" */
    updatePromptMany?: (PromptMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: PromptUpdates[]} })
    /** update data of the table: "prompt_type_enum" */
    updatePromptTypeEnum?: (PromptTypeEnumMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (PromptTypeEnumSetInput | null), 
    /** filter the rows which have to be updated */
    where: PromptTypeEnumBoolExp} })
    /** update single row of the table: "prompt_type_enum" */
    updatePromptTypeEnumByPk?: (PromptTypeEnumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (PromptTypeEnumSetInput | null), pkColumns: PromptTypeEnumPkColumnsInput} })
    /** update multiples rows of table: "prompt_type_enum" */
    updatePromptTypeEnumMany?: (PromptTypeEnumMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: PromptTypeEnumUpdates[]} })
    /** update data of the table: "thread" */
    updateThread?: (ThreadMutationResponseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ThreadIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (ThreadSetInput | null), 
    /** filter the rows which have to be updated */
    where: ThreadBoolExp} })
    /** update single row of the table: "thread" */
    updateThreadByPk?: (ThreadGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (ThreadIncInput | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (ThreadSetInput | null), pkColumns: ThreadPkColumnsInput} })
    /** update multiples rows of table: "thread" */
    updateThreadMany?: (ThreadMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: ThreadUpdates[]} })
    /** update data of the table: "tone_enum" */
    updateToneEnum?: (ToneEnumMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (ToneEnumSetInput | null), 
    /** filter the rows which have to be updated */
    where: ToneEnumBoolExp} })
    /** update single row of the table: "tone_enum" */
    updateToneEnumByPk?: (ToneEnumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (ToneEnumSetInput | null), pkColumns: ToneEnumPkColumnsInput} })
    /** update multiples rows of table: "tone_enum" */
    updateToneEnumMany?: (ToneEnumMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: ToneEnumUpdates[]} })
    /** update data of the table: "type_enum" */
    updateTypeEnum?: (TypeEnumMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (TypeEnumSetInput | null), 
    /** filter the rows which have to be updated */
    where: TypeEnumBoolExp} })
    /** update single row of the table: "type_enum" */
    updateTypeEnumByPk?: (TypeEnumGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (TypeEnumSetInput | null), pkColumns: TypeEnumPkColumnsInput} })
    /** update multiples rows of table: "type_enum" */
    updateTypeEnumMany?: (TypeEnumMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: TypeEnumUpdates[]} })
    /** update data of the table: "user" */
    updateUser?: (UserMutationResponseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (UserSetInput | null), 
    /** filter the rows which have to be updated */
    where: UserBoolExp} })
    /** update single row of the table: "user" */
    updateUserByPk?: (UserGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (UserSetInput | null), pkColumns: UserPkColumnsInput} })
    /** update multiples rows of table: "user" */
    updateUserMany?: (UserMutationResponseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: UserUpdates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface preferenceAggregateBoolExpBool_and {arguments: PreferenceSelectColumnPreferenceAggregateBoolExpBool_andArgumentsColumns,distinct?: (Scalars['Boolean'] | null),filter?: (PreferenceBoolExp | null),predicate: BooleanComparisonExp}

export interface preferenceAggregateBoolExpBool_or {arguments: PreferenceSelectColumnPreferenceAggregateBoolExpBool_orArgumentsColumns,distinct?: (Scalars['Boolean'] | null),filter?: (PreferenceBoolExp | null),predicate: BooleanComparisonExp}

export interface preferenceAggregateBoolExpCount {arguments?: (PreferenceSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (PreferenceBoolExp | null),predicate: IntComparisonExp}

export interface promptAggregateBoolExpCount {arguments?: (PromptSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (PromptBoolExp | null),predicate: IntComparisonExp}

export interface promptChatbotAggregateBoolExpCount {arguments?: (PromptChatbotSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (PromptChatbotBoolExp | null),predicate: IntComparisonExp}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "category" */
    category?: (CategoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (CategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (CategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (CategoryBoolExp | null)} })
    /** fetch aggregated fields from the table: "category" */
    categoryAggregate?: (CategoryAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (CategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (CategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (CategoryBoolExp | null)} })
    /** fetch data from the table: "category" using primary key columns */
    categoryByPk?: (CategoryGenqlSelection & { __args: {categoryId: Scalars['Int']} })
    /** fetch data from the table: "chat" */
    chat?: (ChatGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatBoolExp | null)} })
    /** fetch aggregated fields from the table: "chat" */
    chatAggregate?: (ChatAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatBoolExp | null)} })
    /** fetch data from the table: "chat" using primary key columns */
    chatByPk?: (ChatGenqlSelection & { __args: {chatId: Scalars['Int']} })
    /** fetch data from the table: "chatbot" */
    chatbot?: (ChatbotGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotBoolExp | null)} })
    /** fetch aggregated fields from the table: "chatbot" */
    chatbotAggregate?: (ChatbotAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotBoolExp | null)} })
    /** fetch data from the table: "chatbot" using primary key columns */
    chatbotByPk?: (ChatbotGenqlSelection & { __args: {chatbotId: Scalars['Int']} })
    /** fetch data from the table: "chatbot_category" */
    chatbotCategory?: (ChatbotCategoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotCategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotCategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotCategoryBoolExp | null)} })
    /** fetch aggregated fields from the table: "chatbot_category" */
    chatbotCategoryAggregate?: (ChatbotCategoryAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotCategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotCategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotCategoryBoolExp | null)} })
    /** fetch data from the table: "chatbot_category" using primary key columns */
    chatbotCategoryByPk?: (ChatbotCategoryGenqlSelection & { __args: {categoryId: Scalars['Int'], chatbotId: Scalars['Int']} })
    /** fetch data from the table: "complexity_enum" */
    complexityEnum?: (ComplexityEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ComplexityEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ComplexityEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ComplexityEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "complexity_enum" */
    complexityEnumAggregate?: (ComplexityEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ComplexityEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ComplexityEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ComplexityEnumBoolExp | null)} })
    /** fetch data from the table: "complexity_enum" using primary key columns */
    complexityEnumByPk?: (ComplexityEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "length_enum" */
    lengthEnum?: (LengthEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (LengthEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (LengthEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (LengthEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "length_enum" */
    lengthEnumAggregate?: (LengthEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (LengthEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (LengthEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (LengthEnumBoolExp | null)} })
    /** fetch data from the table: "length_enum" using primary key columns */
    lengthEnumByPk?: (LengthEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "message" */
    message?: (MessageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch aggregated fields from the table: "message" */
    messageAggregate?: (MessageAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch data from the table: "message" using primary key columns */
    messageByPk?: (MessageGenqlSelection & { __args: {messageId: Scalars['uuid']} })
    /** fetch data from the table: "message_type_enum" */
    messageTypeEnum?: (MessageTypeEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageTypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageTypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageTypeEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "message_type_enum" */
    messageTypeEnumAggregate?: (MessageTypeEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageTypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageTypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageTypeEnumBoolExp | null)} })
    /** fetch data from the table: "message_type_enum" using primary key columns */
    messageTypeEnumByPk?: (MessageTypeEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "preference" */
    preference?: (PreferenceGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PreferenceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PreferenceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PreferenceBoolExp | null)} })
    /** fetch aggregated fields from the table: "preference" */
    preferenceAggregate?: (PreferenceAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PreferenceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PreferenceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PreferenceBoolExp | null)} })
    /** fetch data from the table: "preference" using primary key columns */
    preferenceByPk?: (PreferenceGenqlSelection & { __args: {preferenceId: Scalars['Int']} })
    /** fetch data from the table: "prompt" */
    prompt?: (PromptGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptBoolExp | null)} })
    /** fetch aggregated fields from the table: "prompt" */
    promptAggregate?: (PromptAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptBoolExp | null)} })
    /** fetch data from the table: "prompt" using primary key columns */
    promptByPk?: (PromptGenqlSelection & { __args: {promptId: Scalars['Int']} })
    /** fetch data from the table: "prompt_chatbot" */
    promptChatbot?: (PromptChatbotGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptChatbotBoolExp | null)} })
    /** fetch aggregated fields from the table: "prompt_chatbot" */
    promptChatbotAggregate?: (PromptChatbotAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptChatbotBoolExp | null)} })
    /** fetch data from the table: "prompt_chatbot" using primary key columns */
    promptChatbotByPk?: (PromptChatbotGenqlSelection & { __args: {chabotId: Scalars['Int'], promptId: Scalars['Int']} })
    /** fetch data from the table: "prompt_type_enum" */
    promptTypeEnum?: (PromptTypeEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptTypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptTypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptTypeEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "prompt_type_enum" */
    promptTypeEnumAggregate?: (PromptTypeEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptTypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptTypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptTypeEnumBoolExp | null)} })
    /** fetch data from the table: "prompt_type_enum" using primary key columns */
    promptTypeEnumByPk?: (PromptTypeEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "thread" */
    thread?: (ThreadGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ThreadSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ThreadOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ThreadBoolExp | null)} })
    /** fetch aggregated fields from the table: "thread" */
    threadAggregate?: (ThreadAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ThreadSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ThreadOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ThreadBoolExp | null)} })
    /** fetch data from the table: "thread" using primary key columns */
    threadByPk?: (ThreadGenqlSelection & { __args: {threadId: Scalars['uuid']} })
    /** fetch data from the table: "tone_enum" */
    toneEnum?: (ToneEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ToneEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ToneEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ToneEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "tone_enum" */
    toneEnumAggregate?: (ToneEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ToneEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ToneEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ToneEnumBoolExp | null)} })
    /** fetch data from the table: "tone_enum" using primary key columns */
    toneEnumByPk?: (ToneEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "type_enum" */
    typeEnum?: (TypeEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (TypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (TypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (TypeEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "type_enum" */
    typeEnumAggregate?: (TypeEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (TypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (TypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (TypeEnumBoolExp | null)} })
    /** fetch data from the table: "type_enum" using primary key columns */
    typeEnumByPk?: (TypeEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table: "user" */
    user?: (UserGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (UserSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (UserOrderBy[] | null), 
    /** filter the rows returned */
    where?: (UserBoolExp | null)} })
    /** fetch aggregated fields from the table: "user" */
    userAggregate?: (UserAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (UserSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (UserOrderBy[] | null), 
    /** filter the rows returned */
    where?: (UserBoolExp | null)} })
    /** fetch data from the table: "user" using primary key columns */
    userByPk?: (UserGenqlSelection & { __args: {userId: Scalars['uuid']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "category" */
    category?: (CategoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (CategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (CategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (CategoryBoolExp | null)} })
    /** fetch aggregated fields from the table: "category" */
    categoryAggregate?: (CategoryAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (CategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (CategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (CategoryBoolExp | null)} })
    /** fetch data from the table: "category" using primary key columns */
    categoryByPk?: (CategoryGenqlSelection & { __args: {categoryId: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "category" */
    categoryStream?: (CategoryGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (CategoryStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (CategoryBoolExp | null)} })
    /** fetch data from the table: "chat" */
    chat?: (ChatGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatBoolExp | null)} })
    /** fetch aggregated fields from the table: "chat" */
    chatAggregate?: (ChatAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatBoolExp | null)} })
    /** fetch data from the table: "chat" using primary key columns */
    chatByPk?: (ChatGenqlSelection & { __args: {chatId: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "chat" */
    chatStream?: (ChatGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (ChatStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (ChatBoolExp | null)} })
    /** fetch data from the table: "chatbot" */
    chatbot?: (ChatbotGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotBoolExp | null)} })
    /** fetch aggregated fields from the table: "chatbot" */
    chatbotAggregate?: (ChatbotAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotBoolExp | null)} })
    /** fetch data from the table: "chatbot" using primary key columns */
    chatbotByPk?: (ChatbotGenqlSelection & { __args: {chatbotId: Scalars['Int']} })
    /** fetch data from the table: "chatbot_category" */
    chatbotCategory?: (ChatbotCategoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotCategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotCategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotCategoryBoolExp | null)} })
    /** fetch aggregated fields from the table: "chatbot_category" */
    chatbotCategoryAggregate?: (ChatbotCategoryAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ChatbotCategorySelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ChatbotCategoryOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ChatbotCategoryBoolExp | null)} })
    /** fetch data from the table: "chatbot_category" using primary key columns */
    chatbotCategoryByPk?: (ChatbotCategoryGenqlSelection & { __args: {categoryId: Scalars['Int'], chatbotId: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "chatbot_category" */
    chatbotCategoryStream?: (ChatbotCategoryGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (ChatbotCategoryStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (ChatbotCategoryBoolExp | null)} })
    /** fetch data from the table in a streaming manner: "chatbot" */
    chatbotStream?: (ChatbotGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (ChatbotStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (ChatbotBoolExp | null)} })
    /** fetch data from the table: "complexity_enum" */
    complexityEnum?: (ComplexityEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ComplexityEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ComplexityEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ComplexityEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "complexity_enum" */
    complexityEnumAggregate?: (ComplexityEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ComplexityEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ComplexityEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ComplexityEnumBoolExp | null)} })
    /** fetch data from the table: "complexity_enum" using primary key columns */
    complexityEnumByPk?: (ComplexityEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "complexity_enum" */
    complexityEnumStream?: (ComplexityEnumGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (ComplexityEnumStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (ComplexityEnumBoolExp | null)} })
    /** fetch data from the table: "length_enum" */
    lengthEnum?: (LengthEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (LengthEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (LengthEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (LengthEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "length_enum" */
    lengthEnumAggregate?: (LengthEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (LengthEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (LengthEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (LengthEnumBoolExp | null)} })
    /** fetch data from the table: "length_enum" using primary key columns */
    lengthEnumByPk?: (LengthEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "length_enum" */
    lengthEnumStream?: (LengthEnumGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (LengthEnumStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (LengthEnumBoolExp | null)} })
    /** fetch data from the table: "message" */
    message?: (MessageGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch aggregated fields from the table: "message" */
    messageAggregate?: (MessageAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch data from the table: "message" using primary key columns */
    messageByPk?: (MessageGenqlSelection & { __args: {messageId: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "message" */
    messageStream?: (MessageGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (MessageStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (MessageBoolExp | null)} })
    /** fetch data from the table: "message_type_enum" */
    messageTypeEnum?: (MessageTypeEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageTypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageTypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageTypeEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "message_type_enum" */
    messageTypeEnumAggregate?: (MessageTypeEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (MessageTypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (MessageTypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (MessageTypeEnumBoolExp | null)} })
    /** fetch data from the table: "message_type_enum" using primary key columns */
    messageTypeEnumByPk?: (MessageTypeEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "message_type_enum" */
    messageTypeEnumStream?: (MessageTypeEnumGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (MessageTypeEnumStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (MessageTypeEnumBoolExp | null)} })
    /** fetch data from the table: "preference" */
    preference?: (PreferenceGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PreferenceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PreferenceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PreferenceBoolExp | null)} })
    /** fetch aggregated fields from the table: "preference" */
    preferenceAggregate?: (PreferenceAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PreferenceSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PreferenceOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PreferenceBoolExp | null)} })
    /** fetch data from the table: "preference" using primary key columns */
    preferenceByPk?: (PreferenceGenqlSelection & { __args: {preferenceId: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "preference" */
    preferenceStream?: (PreferenceGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (PreferenceStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (PreferenceBoolExp | null)} })
    /** fetch data from the table: "prompt" */
    prompt?: (PromptGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptBoolExp | null)} })
    /** fetch aggregated fields from the table: "prompt" */
    promptAggregate?: (PromptAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptBoolExp | null)} })
    /** fetch data from the table: "prompt" using primary key columns */
    promptByPk?: (PromptGenqlSelection & { __args: {promptId: Scalars['Int']} })
    /** fetch data from the table: "prompt_chatbot" */
    promptChatbot?: (PromptChatbotGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptChatbotBoolExp | null)} })
    /** fetch aggregated fields from the table: "prompt_chatbot" */
    promptChatbotAggregate?: (PromptChatbotAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptChatbotSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptChatbotOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptChatbotBoolExp | null)} })
    /** fetch data from the table: "prompt_chatbot" using primary key columns */
    promptChatbotByPk?: (PromptChatbotGenqlSelection & { __args: {chabotId: Scalars['Int'], promptId: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "prompt_chatbot" */
    promptChatbotStream?: (PromptChatbotGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (PromptChatbotStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (PromptChatbotBoolExp | null)} })
    /** fetch data from the table in a streaming manner: "prompt" */
    promptStream?: (PromptGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (PromptStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (PromptBoolExp | null)} })
    /** fetch data from the table: "prompt_type_enum" */
    promptTypeEnum?: (PromptTypeEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptTypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptTypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptTypeEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "prompt_type_enum" */
    promptTypeEnumAggregate?: (PromptTypeEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (PromptTypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (PromptTypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (PromptTypeEnumBoolExp | null)} })
    /** fetch data from the table: "prompt_type_enum" using primary key columns */
    promptTypeEnumByPk?: (PromptTypeEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "prompt_type_enum" */
    promptTypeEnumStream?: (PromptTypeEnumGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (PromptTypeEnumStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (PromptTypeEnumBoolExp | null)} })
    /** fetch data from the table: "thread" */
    thread?: (ThreadGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ThreadSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ThreadOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ThreadBoolExp | null)} })
    /** fetch aggregated fields from the table: "thread" */
    threadAggregate?: (ThreadAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ThreadSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ThreadOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ThreadBoolExp | null)} })
    /** fetch data from the table: "thread" using primary key columns */
    threadByPk?: (ThreadGenqlSelection & { __args: {threadId: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "thread" */
    threadStream?: (ThreadGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (ThreadStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (ThreadBoolExp | null)} })
    /** fetch data from the table: "tone_enum" */
    toneEnum?: (ToneEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ToneEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ToneEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ToneEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "tone_enum" */
    toneEnumAggregate?: (ToneEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (ToneEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (ToneEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (ToneEnumBoolExp | null)} })
    /** fetch data from the table: "tone_enum" using primary key columns */
    toneEnumByPk?: (ToneEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "tone_enum" */
    toneEnumStream?: (ToneEnumGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (ToneEnumStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (ToneEnumBoolExp | null)} })
    /** fetch data from the table: "type_enum" */
    typeEnum?: (TypeEnumGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (TypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (TypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (TypeEnumBoolExp | null)} })
    /** fetch aggregated fields from the table: "type_enum" */
    typeEnumAggregate?: (TypeEnumAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (TypeEnumSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (TypeEnumOrderBy[] | null), 
    /** filter the rows returned */
    where?: (TypeEnumBoolExp | null)} })
    /** fetch data from the table: "type_enum" using primary key columns */
    typeEnumByPk?: (TypeEnumGenqlSelection & { __args: {value: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "type_enum" */
    typeEnumStream?: (TypeEnumGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (TypeEnumStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (TypeEnumBoolExp | null)} })
    /** fetch data from the table: "user" */
    user?: (UserGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (UserSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (UserOrderBy[] | null), 
    /** filter the rows returned */
    where?: (UserBoolExp | null)} })
    /** fetch aggregated fields from the table: "user" */
    userAggregate?: (UserAggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinctOn?: (UserSelectColumn[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    orderBy?: (UserOrderBy[] | null), 
    /** filter the rows returned */
    where?: (UserBoolExp | null)} })
    /** fetch data from the table: "user" using primary key columns */
    userByPk?: (UserGenqlSelection & { __args: {userId: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "user" */
    userStream?: (UserGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batchSize: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (UserStreamCursorInput | null)[], 
    /** filter the rows returned */
    where?: (UserBoolExp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface threadAggregateBoolExpCount {arguments?: (ThreadSelectColumn[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (ThreadBoolExp | null),predicate: IntComparisonExp}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const Category_possibleTypes: string[] = ['Category']
    export const isCategory = (obj?: { __typename?: any } | null): obj is Category => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategory"')
      return Category_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryAggregate_possibleTypes: string[] = ['CategoryAggregate']
    export const isCategoryAggregate = (obj?: { __typename?: any } | null): obj is CategoryAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryAggregate"')
      return CategoryAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryAggregateFields_possibleTypes: string[] = ['CategoryAggregateFields']
    export const isCategoryAggregateFields = (obj?: { __typename?: any } | null): obj is CategoryAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryAggregateFields"')
      return CategoryAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryAvgFields_possibleTypes: string[] = ['CategoryAvgFields']
    export const isCategoryAvgFields = (obj?: { __typename?: any } | null): obj is CategoryAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryAvgFields"')
      return CategoryAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryMaxFields_possibleTypes: string[] = ['CategoryMaxFields']
    export const isCategoryMaxFields = (obj?: { __typename?: any } | null): obj is CategoryMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryMaxFields"')
      return CategoryMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryMinFields_possibleTypes: string[] = ['CategoryMinFields']
    export const isCategoryMinFields = (obj?: { __typename?: any } | null): obj is CategoryMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryMinFields"')
      return CategoryMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryMutationResponse_possibleTypes: string[] = ['CategoryMutationResponse']
    export const isCategoryMutationResponse = (obj?: { __typename?: any } | null): obj is CategoryMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryMutationResponse"')
      return CategoryMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryStddevFields_possibleTypes: string[] = ['CategoryStddevFields']
    export const isCategoryStddevFields = (obj?: { __typename?: any } | null): obj is CategoryStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryStddevFields"')
      return CategoryStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryStddevPopFields_possibleTypes: string[] = ['CategoryStddevPopFields']
    export const isCategoryStddevPopFields = (obj?: { __typename?: any } | null): obj is CategoryStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryStddevPopFields"')
      return CategoryStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryStddevSampFields_possibleTypes: string[] = ['CategoryStddevSampFields']
    export const isCategoryStddevSampFields = (obj?: { __typename?: any } | null): obj is CategoryStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryStddevSampFields"')
      return CategoryStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategorySumFields_possibleTypes: string[] = ['CategorySumFields']
    export const isCategorySumFields = (obj?: { __typename?: any } | null): obj is CategorySumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategorySumFields"')
      return CategorySumFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryVarPopFields_possibleTypes: string[] = ['CategoryVarPopFields']
    export const isCategoryVarPopFields = (obj?: { __typename?: any } | null): obj is CategoryVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryVarPopFields"')
      return CategoryVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryVarSampFields_possibleTypes: string[] = ['CategoryVarSampFields']
    export const isCategoryVarSampFields = (obj?: { __typename?: any } | null): obj is CategoryVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryVarSampFields"')
      return CategoryVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryVarianceFields_possibleTypes: string[] = ['CategoryVarianceFields']
    export const isCategoryVarianceFields = (obj?: { __typename?: any } | null): obj is CategoryVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryVarianceFields"')
      return CategoryVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const Chat_possibleTypes: string[] = ['Chat']
    export const isChat = (obj?: { __typename?: any } | null): obj is Chat => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChat"')
      return Chat_possibleTypes.includes(obj.__typename)
    }
    


    const ChatAggregate_possibleTypes: string[] = ['ChatAggregate']
    export const isChatAggregate = (obj?: { __typename?: any } | null): obj is ChatAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatAggregate"')
      return ChatAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const ChatAggregateFields_possibleTypes: string[] = ['ChatAggregateFields']
    export const isChatAggregateFields = (obj?: { __typename?: any } | null): obj is ChatAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatAggregateFields"')
      return ChatAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatAvgFields_possibleTypes: string[] = ['ChatAvgFields']
    export const isChatAvgFields = (obj?: { __typename?: any } | null): obj is ChatAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatAvgFields"')
      return ChatAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatMaxFields_possibleTypes: string[] = ['ChatMaxFields']
    export const isChatMaxFields = (obj?: { __typename?: any } | null): obj is ChatMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatMaxFields"')
      return ChatMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatMinFields_possibleTypes: string[] = ['ChatMinFields']
    export const isChatMinFields = (obj?: { __typename?: any } | null): obj is ChatMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatMinFields"')
      return ChatMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatMutationResponse_possibleTypes: string[] = ['ChatMutationResponse']
    export const isChatMutationResponse = (obj?: { __typename?: any } | null): obj is ChatMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatMutationResponse"')
      return ChatMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ChatStddevFields_possibleTypes: string[] = ['ChatStddevFields']
    export const isChatStddevFields = (obj?: { __typename?: any } | null): obj is ChatStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatStddevFields"')
      return ChatStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatStddevPopFields_possibleTypes: string[] = ['ChatStddevPopFields']
    export const isChatStddevPopFields = (obj?: { __typename?: any } | null): obj is ChatStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatStddevPopFields"')
      return ChatStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatStddevSampFields_possibleTypes: string[] = ['ChatStddevSampFields']
    export const isChatStddevSampFields = (obj?: { __typename?: any } | null): obj is ChatStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatStddevSampFields"')
      return ChatStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatSumFields_possibleTypes: string[] = ['ChatSumFields']
    export const isChatSumFields = (obj?: { __typename?: any } | null): obj is ChatSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatSumFields"')
      return ChatSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatVarPopFields_possibleTypes: string[] = ['ChatVarPopFields']
    export const isChatVarPopFields = (obj?: { __typename?: any } | null): obj is ChatVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatVarPopFields"')
      return ChatVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatVarSampFields_possibleTypes: string[] = ['ChatVarSampFields']
    export const isChatVarSampFields = (obj?: { __typename?: any } | null): obj is ChatVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatVarSampFields"')
      return ChatVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatVarianceFields_possibleTypes: string[] = ['ChatVarianceFields']
    export const isChatVarianceFields = (obj?: { __typename?: any } | null): obj is ChatVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatVarianceFields"')
      return ChatVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const Chatbot_possibleTypes: string[] = ['Chatbot']
    export const isChatbot = (obj?: { __typename?: any } | null): obj is Chatbot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbot"')
      return Chatbot_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotAggregate_possibleTypes: string[] = ['ChatbotAggregate']
    export const isChatbotAggregate = (obj?: { __typename?: any } | null): obj is ChatbotAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotAggregate"')
      return ChatbotAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotAggregateFields_possibleTypes: string[] = ['ChatbotAggregateFields']
    export const isChatbotAggregateFields = (obj?: { __typename?: any } | null): obj is ChatbotAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotAggregateFields"')
      return ChatbotAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotAvgFields_possibleTypes: string[] = ['ChatbotAvgFields']
    export const isChatbotAvgFields = (obj?: { __typename?: any } | null): obj is ChatbotAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotAvgFields"')
      return ChatbotAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategory_possibleTypes: string[] = ['ChatbotCategory']
    export const isChatbotCategory = (obj?: { __typename?: any } | null): obj is ChatbotCategory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategory"')
      return ChatbotCategory_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryAggregate_possibleTypes: string[] = ['ChatbotCategoryAggregate']
    export const isChatbotCategoryAggregate = (obj?: { __typename?: any } | null): obj is ChatbotCategoryAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryAggregate"')
      return ChatbotCategoryAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryAggregateFields_possibleTypes: string[] = ['ChatbotCategoryAggregateFields']
    export const isChatbotCategoryAggregateFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryAggregateFields"')
      return ChatbotCategoryAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryAvgFields_possibleTypes: string[] = ['ChatbotCategoryAvgFields']
    export const isChatbotCategoryAvgFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryAvgFields"')
      return ChatbotCategoryAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryMaxFields_possibleTypes: string[] = ['ChatbotCategoryMaxFields']
    export const isChatbotCategoryMaxFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryMaxFields"')
      return ChatbotCategoryMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryMinFields_possibleTypes: string[] = ['ChatbotCategoryMinFields']
    export const isChatbotCategoryMinFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryMinFields"')
      return ChatbotCategoryMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryMutationResponse_possibleTypes: string[] = ['ChatbotCategoryMutationResponse']
    export const isChatbotCategoryMutationResponse = (obj?: { __typename?: any } | null): obj is ChatbotCategoryMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryMutationResponse"')
      return ChatbotCategoryMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryStddevFields_possibleTypes: string[] = ['ChatbotCategoryStddevFields']
    export const isChatbotCategoryStddevFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryStddevFields"')
      return ChatbotCategoryStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryStddevPopFields_possibleTypes: string[] = ['ChatbotCategoryStddevPopFields']
    export const isChatbotCategoryStddevPopFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryStddevPopFields"')
      return ChatbotCategoryStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryStddevSampFields_possibleTypes: string[] = ['ChatbotCategoryStddevSampFields']
    export const isChatbotCategoryStddevSampFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryStddevSampFields"')
      return ChatbotCategoryStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategorySumFields_possibleTypes: string[] = ['ChatbotCategorySumFields']
    export const isChatbotCategorySumFields = (obj?: { __typename?: any } | null): obj is ChatbotCategorySumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategorySumFields"')
      return ChatbotCategorySumFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryVarPopFields_possibleTypes: string[] = ['ChatbotCategoryVarPopFields']
    export const isChatbotCategoryVarPopFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryVarPopFields"')
      return ChatbotCategoryVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryVarSampFields_possibleTypes: string[] = ['ChatbotCategoryVarSampFields']
    export const isChatbotCategoryVarSampFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryVarSampFields"')
      return ChatbotCategoryVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotCategoryVarianceFields_possibleTypes: string[] = ['ChatbotCategoryVarianceFields']
    export const isChatbotCategoryVarianceFields = (obj?: { __typename?: any } | null): obj is ChatbotCategoryVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotCategoryVarianceFields"')
      return ChatbotCategoryVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotMaxFields_possibleTypes: string[] = ['ChatbotMaxFields']
    export const isChatbotMaxFields = (obj?: { __typename?: any } | null): obj is ChatbotMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotMaxFields"')
      return ChatbotMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotMinFields_possibleTypes: string[] = ['ChatbotMinFields']
    export const isChatbotMinFields = (obj?: { __typename?: any } | null): obj is ChatbotMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotMinFields"')
      return ChatbotMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotMutationResponse_possibleTypes: string[] = ['ChatbotMutationResponse']
    export const isChatbotMutationResponse = (obj?: { __typename?: any } | null): obj is ChatbotMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotMutationResponse"')
      return ChatbotMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotStddevFields_possibleTypes: string[] = ['ChatbotStddevFields']
    export const isChatbotStddevFields = (obj?: { __typename?: any } | null): obj is ChatbotStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotStddevFields"')
      return ChatbotStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotStddevPopFields_possibleTypes: string[] = ['ChatbotStddevPopFields']
    export const isChatbotStddevPopFields = (obj?: { __typename?: any } | null): obj is ChatbotStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotStddevPopFields"')
      return ChatbotStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotStddevSampFields_possibleTypes: string[] = ['ChatbotStddevSampFields']
    export const isChatbotStddevSampFields = (obj?: { __typename?: any } | null): obj is ChatbotStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotStddevSampFields"')
      return ChatbotStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotSumFields_possibleTypes: string[] = ['ChatbotSumFields']
    export const isChatbotSumFields = (obj?: { __typename?: any } | null): obj is ChatbotSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotSumFields"')
      return ChatbotSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotVarPopFields_possibleTypes: string[] = ['ChatbotVarPopFields']
    export const isChatbotVarPopFields = (obj?: { __typename?: any } | null): obj is ChatbotVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotVarPopFields"')
      return ChatbotVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotVarSampFields_possibleTypes: string[] = ['ChatbotVarSampFields']
    export const isChatbotVarSampFields = (obj?: { __typename?: any } | null): obj is ChatbotVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotVarSampFields"')
      return ChatbotVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const ChatbotVarianceFields_possibleTypes: string[] = ['ChatbotVarianceFields']
    export const isChatbotVarianceFields = (obj?: { __typename?: any } | null): obj is ChatbotVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatbotVarianceFields"')
      return ChatbotVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const ComplexityEnum_possibleTypes: string[] = ['ComplexityEnum']
    export const isComplexityEnum = (obj?: { __typename?: any } | null): obj is ComplexityEnum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComplexityEnum"')
      return ComplexityEnum_possibleTypes.includes(obj.__typename)
    }
    


    const ComplexityEnumAggregate_possibleTypes: string[] = ['ComplexityEnumAggregate']
    export const isComplexityEnumAggregate = (obj?: { __typename?: any } | null): obj is ComplexityEnumAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComplexityEnumAggregate"')
      return ComplexityEnumAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const ComplexityEnumAggregateFields_possibleTypes: string[] = ['ComplexityEnumAggregateFields']
    export const isComplexityEnumAggregateFields = (obj?: { __typename?: any } | null): obj is ComplexityEnumAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComplexityEnumAggregateFields"')
      return ComplexityEnumAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const ComplexityEnumMaxFields_possibleTypes: string[] = ['ComplexityEnumMaxFields']
    export const isComplexityEnumMaxFields = (obj?: { __typename?: any } | null): obj is ComplexityEnumMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComplexityEnumMaxFields"')
      return ComplexityEnumMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const ComplexityEnumMinFields_possibleTypes: string[] = ['ComplexityEnumMinFields']
    export const isComplexityEnumMinFields = (obj?: { __typename?: any } | null): obj is ComplexityEnumMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComplexityEnumMinFields"')
      return ComplexityEnumMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const ComplexityEnumMutationResponse_possibleTypes: string[] = ['ComplexityEnumMutationResponse']
    export const isComplexityEnumMutationResponse = (obj?: { __typename?: any } | null): obj is ComplexityEnumMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComplexityEnumMutationResponse"')
      return ComplexityEnumMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const LengthEnum_possibleTypes: string[] = ['LengthEnum']
    export const isLengthEnum = (obj?: { __typename?: any } | null): obj is LengthEnum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLengthEnum"')
      return LengthEnum_possibleTypes.includes(obj.__typename)
    }
    


    const LengthEnumAggregate_possibleTypes: string[] = ['LengthEnumAggregate']
    export const isLengthEnumAggregate = (obj?: { __typename?: any } | null): obj is LengthEnumAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLengthEnumAggregate"')
      return LengthEnumAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const LengthEnumAggregateFields_possibleTypes: string[] = ['LengthEnumAggregateFields']
    export const isLengthEnumAggregateFields = (obj?: { __typename?: any } | null): obj is LengthEnumAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLengthEnumAggregateFields"')
      return LengthEnumAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const LengthEnumMaxFields_possibleTypes: string[] = ['LengthEnumMaxFields']
    export const isLengthEnumMaxFields = (obj?: { __typename?: any } | null): obj is LengthEnumMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLengthEnumMaxFields"')
      return LengthEnumMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const LengthEnumMinFields_possibleTypes: string[] = ['LengthEnumMinFields']
    export const isLengthEnumMinFields = (obj?: { __typename?: any } | null): obj is LengthEnumMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLengthEnumMinFields"')
      return LengthEnumMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const LengthEnumMutationResponse_possibleTypes: string[] = ['LengthEnumMutationResponse']
    export const isLengthEnumMutationResponse = (obj?: { __typename?: any } | null): obj is LengthEnumMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLengthEnumMutationResponse"')
      return LengthEnumMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Message_possibleTypes: string[] = ['Message']
    export const isMessage = (obj?: { __typename?: any } | null): obj is Message => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessage"')
      return Message_possibleTypes.includes(obj.__typename)
    }
    


    const MessageAggregate_possibleTypes: string[] = ['MessageAggregate']
    export const isMessageAggregate = (obj?: { __typename?: any } | null): obj is MessageAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageAggregate"')
      return MessageAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const MessageAggregateFields_possibleTypes: string[] = ['MessageAggregateFields']
    export const isMessageAggregateFields = (obj?: { __typename?: any } | null): obj is MessageAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageAggregateFields"')
      return MessageAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const MessageMaxFields_possibleTypes: string[] = ['MessageMaxFields']
    export const isMessageMaxFields = (obj?: { __typename?: any } | null): obj is MessageMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageMaxFields"')
      return MessageMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const MessageMinFields_possibleTypes: string[] = ['MessageMinFields']
    export const isMessageMinFields = (obj?: { __typename?: any } | null): obj is MessageMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageMinFields"')
      return MessageMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const MessageMutationResponse_possibleTypes: string[] = ['MessageMutationResponse']
    export const isMessageMutationResponse = (obj?: { __typename?: any } | null): obj is MessageMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageMutationResponse"')
      return MessageMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const MessageTypeEnum_possibleTypes: string[] = ['MessageTypeEnum']
    export const isMessageTypeEnum = (obj?: { __typename?: any } | null): obj is MessageTypeEnum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageTypeEnum"')
      return MessageTypeEnum_possibleTypes.includes(obj.__typename)
    }
    


    const MessageTypeEnumAggregate_possibleTypes: string[] = ['MessageTypeEnumAggregate']
    export const isMessageTypeEnumAggregate = (obj?: { __typename?: any } | null): obj is MessageTypeEnumAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageTypeEnumAggregate"')
      return MessageTypeEnumAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const MessageTypeEnumAggregateFields_possibleTypes: string[] = ['MessageTypeEnumAggregateFields']
    export const isMessageTypeEnumAggregateFields = (obj?: { __typename?: any } | null): obj is MessageTypeEnumAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageTypeEnumAggregateFields"')
      return MessageTypeEnumAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const MessageTypeEnumMaxFields_possibleTypes: string[] = ['MessageTypeEnumMaxFields']
    export const isMessageTypeEnumMaxFields = (obj?: { __typename?: any } | null): obj is MessageTypeEnumMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageTypeEnumMaxFields"')
      return MessageTypeEnumMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const MessageTypeEnumMinFields_possibleTypes: string[] = ['MessageTypeEnumMinFields']
    export const isMessageTypeEnumMinFields = (obj?: { __typename?: any } | null): obj is MessageTypeEnumMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageTypeEnumMinFields"')
      return MessageTypeEnumMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const MessageTypeEnumMutationResponse_possibleTypes: string[] = ['MessageTypeEnumMutationResponse']
    export const isMessageTypeEnumMutationResponse = (obj?: { __typename?: any } | null): obj is MessageTypeEnumMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMessageTypeEnumMutationResponse"')
      return MessageTypeEnumMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Preference_possibleTypes: string[] = ['Preference']
    export const isPreference = (obj?: { __typename?: any } | null): obj is Preference => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreference"')
      return Preference_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceAggregate_possibleTypes: string[] = ['PreferenceAggregate']
    export const isPreferenceAggregate = (obj?: { __typename?: any } | null): obj is PreferenceAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceAggregate"')
      return PreferenceAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceAggregateFields_possibleTypes: string[] = ['PreferenceAggregateFields']
    export const isPreferenceAggregateFields = (obj?: { __typename?: any } | null): obj is PreferenceAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceAggregateFields"')
      return PreferenceAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceAvgFields_possibleTypes: string[] = ['PreferenceAvgFields']
    export const isPreferenceAvgFields = (obj?: { __typename?: any } | null): obj is PreferenceAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceAvgFields"')
      return PreferenceAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceMaxFields_possibleTypes: string[] = ['PreferenceMaxFields']
    export const isPreferenceMaxFields = (obj?: { __typename?: any } | null): obj is PreferenceMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceMaxFields"')
      return PreferenceMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceMinFields_possibleTypes: string[] = ['PreferenceMinFields']
    export const isPreferenceMinFields = (obj?: { __typename?: any } | null): obj is PreferenceMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceMinFields"')
      return PreferenceMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceMutationResponse_possibleTypes: string[] = ['PreferenceMutationResponse']
    export const isPreferenceMutationResponse = (obj?: { __typename?: any } | null): obj is PreferenceMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceMutationResponse"')
      return PreferenceMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceStddevFields_possibleTypes: string[] = ['PreferenceStddevFields']
    export const isPreferenceStddevFields = (obj?: { __typename?: any } | null): obj is PreferenceStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceStddevFields"')
      return PreferenceStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceStddevPopFields_possibleTypes: string[] = ['PreferenceStddevPopFields']
    export const isPreferenceStddevPopFields = (obj?: { __typename?: any } | null): obj is PreferenceStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceStddevPopFields"')
      return PreferenceStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceStddevSampFields_possibleTypes: string[] = ['PreferenceStddevSampFields']
    export const isPreferenceStddevSampFields = (obj?: { __typename?: any } | null): obj is PreferenceStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceStddevSampFields"')
      return PreferenceStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceSumFields_possibleTypes: string[] = ['PreferenceSumFields']
    export const isPreferenceSumFields = (obj?: { __typename?: any } | null): obj is PreferenceSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceSumFields"')
      return PreferenceSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceVarPopFields_possibleTypes: string[] = ['PreferenceVarPopFields']
    export const isPreferenceVarPopFields = (obj?: { __typename?: any } | null): obj is PreferenceVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceVarPopFields"')
      return PreferenceVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceVarSampFields_possibleTypes: string[] = ['PreferenceVarSampFields']
    export const isPreferenceVarSampFields = (obj?: { __typename?: any } | null): obj is PreferenceVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceVarSampFields"')
      return PreferenceVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const PreferenceVarianceFields_possibleTypes: string[] = ['PreferenceVarianceFields']
    export const isPreferenceVarianceFields = (obj?: { __typename?: any } | null): obj is PreferenceVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferenceVarianceFields"')
      return PreferenceVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const Prompt_possibleTypes: string[] = ['Prompt']
    export const isPrompt = (obj?: { __typename?: any } | null): obj is Prompt => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrompt"')
      return Prompt_possibleTypes.includes(obj.__typename)
    }
    


    const PromptAggregate_possibleTypes: string[] = ['PromptAggregate']
    export const isPromptAggregate = (obj?: { __typename?: any } | null): obj is PromptAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptAggregate"')
      return PromptAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const PromptAggregateFields_possibleTypes: string[] = ['PromptAggregateFields']
    export const isPromptAggregateFields = (obj?: { __typename?: any } | null): obj is PromptAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptAggregateFields"')
      return PromptAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptAvgFields_possibleTypes: string[] = ['PromptAvgFields']
    export const isPromptAvgFields = (obj?: { __typename?: any } | null): obj is PromptAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptAvgFields"')
      return PromptAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbot_possibleTypes: string[] = ['PromptChatbot']
    export const isPromptChatbot = (obj?: { __typename?: any } | null): obj is PromptChatbot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbot"')
      return PromptChatbot_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotAggregate_possibleTypes: string[] = ['PromptChatbotAggregate']
    export const isPromptChatbotAggregate = (obj?: { __typename?: any } | null): obj is PromptChatbotAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotAggregate"')
      return PromptChatbotAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotAggregateFields_possibleTypes: string[] = ['PromptChatbotAggregateFields']
    export const isPromptChatbotAggregateFields = (obj?: { __typename?: any } | null): obj is PromptChatbotAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotAggregateFields"')
      return PromptChatbotAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotAvgFields_possibleTypes: string[] = ['PromptChatbotAvgFields']
    export const isPromptChatbotAvgFields = (obj?: { __typename?: any } | null): obj is PromptChatbotAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotAvgFields"')
      return PromptChatbotAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotMaxFields_possibleTypes: string[] = ['PromptChatbotMaxFields']
    export const isPromptChatbotMaxFields = (obj?: { __typename?: any } | null): obj is PromptChatbotMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotMaxFields"')
      return PromptChatbotMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotMinFields_possibleTypes: string[] = ['PromptChatbotMinFields']
    export const isPromptChatbotMinFields = (obj?: { __typename?: any } | null): obj is PromptChatbotMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotMinFields"')
      return PromptChatbotMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotMutationResponse_possibleTypes: string[] = ['PromptChatbotMutationResponse']
    export const isPromptChatbotMutationResponse = (obj?: { __typename?: any } | null): obj is PromptChatbotMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotMutationResponse"')
      return PromptChatbotMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotStddevFields_possibleTypes: string[] = ['PromptChatbotStddevFields']
    export const isPromptChatbotStddevFields = (obj?: { __typename?: any } | null): obj is PromptChatbotStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotStddevFields"')
      return PromptChatbotStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotStddevPopFields_possibleTypes: string[] = ['PromptChatbotStddevPopFields']
    export const isPromptChatbotStddevPopFields = (obj?: { __typename?: any } | null): obj is PromptChatbotStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotStddevPopFields"')
      return PromptChatbotStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotStddevSampFields_possibleTypes: string[] = ['PromptChatbotStddevSampFields']
    export const isPromptChatbotStddevSampFields = (obj?: { __typename?: any } | null): obj is PromptChatbotStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotStddevSampFields"')
      return PromptChatbotStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotSumFields_possibleTypes: string[] = ['PromptChatbotSumFields']
    export const isPromptChatbotSumFields = (obj?: { __typename?: any } | null): obj is PromptChatbotSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotSumFields"')
      return PromptChatbotSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotVarPopFields_possibleTypes: string[] = ['PromptChatbotVarPopFields']
    export const isPromptChatbotVarPopFields = (obj?: { __typename?: any } | null): obj is PromptChatbotVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotVarPopFields"')
      return PromptChatbotVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotVarSampFields_possibleTypes: string[] = ['PromptChatbotVarSampFields']
    export const isPromptChatbotVarSampFields = (obj?: { __typename?: any } | null): obj is PromptChatbotVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotVarSampFields"')
      return PromptChatbotVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptChatbotVarianceFields_possibleTypes: string[] = ['PromptChatbotVarianceFields']
    export const isPromptChatbotVarianceFields = (obj?: { __typename?: any } | null): obj is PromptChatbotVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptChatbotVarianceFields"')
      return PromptChatbotVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptMaxFields_possibleTypes: string[] = ['PromptMaxFields']
    export const isPromptMaxFields = (obj?: { __typename?: any } | null): obj is PromptMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptMaxFields"')
      return PromptMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptMinFields_possibleTypes: string[] = ['PromptMinFields']
    export const isPromptMinFields = (obj?: { __typename?: any } | null): obj is PromptMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptMinFields"')
      return PromptMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptMutationResponse_possibleTypes: string[] = ['PromptMutationResponse']
    export const isPromptMutationResponse = (obj?: { __typename?: any } | null): obj is PromptMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptMutationResponse"')
      return PromptMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PromptStddevFields_possibleTypes: string[] = ['PromptStddevFields']
    export const isPromptStddevFields = (obj?: { __typename?: any } | null): obj is PromptStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptStddevFields"')
      return PromptStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptStddevPopFields_possibleTypes: string[] = ['PromptStddevPopFields']
    export const isPromptStddevPopFields = (obj?: { __typename?: any } | null): obj is PromptStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptStddevPopFields"')
      return PromptStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptStddevSampFields_possibleTypes: string[] = ['PromptStddevSampFields']
    export const isPromptStddevSampFields = (obj?: { __typename?: any } | null): obj is PromptStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptStddevSampFields"')
      return PromptStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptSumFields_possibleTypes: string[] = ['PromptSumFields']
    export const isPromptSumFields = (obj?: { __typename?: any } | null): obj is PromptSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptSumFields"')
      return PromptSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptTypeEnum_possibleTypes: string[] = ['PromptTypeEnum']
    export const isPromptTypeEnum = (obj?: { __typename?: any } | null): obj is PromptTypeEnum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptTypeEnum"')
      return PromptTypeEnum_possibleTypes.includes(obj.__typename)
    }
    


    const PromptTypeEnumAggregate_possibleTypes: string[] = ['PromptTypeEnumAggregate']
    export const isPromptTypeEnumAggregate = (obj?: { __typename?: any } | null): obj is PromptTypeEnumAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptTypeEnumAggregate"')
      return PromptTypeEnumAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const PromptTypeEnumAggregateFields_possibleTypes: string[] = ['PromptTypeEnumAggregateFields']
    export const isPromptTypeEnumAggregateFields = (obj?: { __typename?: any } | null): obj is PromptTypeEnumAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptTypeEnumAggregateFields"')
      return PromptTypeEnumAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptTypeEnumMaxFields_possibleTypes: string[] = ['PromptTypeEnumMaxFields']
    export const isPromptTypeEnumMaxFields = (obj?: { __typename?: any } | null): obj is PromptTypeEnumMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptTypeEnumMaxFields"')
      return PromptTypeEnumMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptTypeEnumMinFields_possibleTypes: string[] = ['PromptTypeEnumMinFields']
    export const isPromptTypeEnumMinFields = (obj?: { __typename?: any } | null): obj is PromptTypeEnumMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptTypeEnumMinFields"')
      return PromptTypeEnumMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptTypeEnumMutationResponse_possibleTypes: string[] = ['PromptTypeEnumMutationResponse']
    export const isPromptTypeEnumMutationResponse = (obj?: { __typename?: any } | null): obj is PromptTypeEnumMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptTypeEnumMutationResponse"')
      return PromptTypeEnumMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const PromptVarPopFields_possibleTypes: string[] = ['PromptVarPopFields']
    export const isPromptVarPopFields = (obj?: { __typename?: any } | null): obj is PromptVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptVarPopFields"')
      return PromptVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptVarSampFields_possibleTypes: string[] = ['PromptVarSampFields']
    export const isPromptVarSampFields = (obj?: { __typename?: any } | null): obj is PromptVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptVarSampFields"')
      return PromptVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const PromptVarianceFields_possibleTypes: string[] = ['PromptVarianceFields']
    export const isPromptVarianceFields = (obj?: { __typename?: any } | null): obj is PromptVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptVarianceFields"')
      return PromptVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const Thread_possibleTypes: string[] = ['Thread']
    export const isThread = (obj?: { __typename?: any } | null): obj is Thread => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThread"')
      return Thread_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadAggregate_possibleTypes: string[] = ['ThreadAggregate']
    export const isThreadAggregate = (obj?: { __typename?: any } | null): obj is ThreadAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadAggregate"')
      return ThreadAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadAggregateFields_possibleTypes: string[] = ['ThreadAggregateFields']
    export const isThreadAggregateFields = (obj?: { __typename?: any } | null): obj is ThreadAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadAggregateFields"')
      return ThreadAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadAvgFields_possibleTypes: string[] = ['ThreadAvgFields']
    export const isThreadAvgFields = (obj?: { __typename?: any } | null): obj is ThreadAvgFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadAvgFields"')
      return ThreadAvgFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadMaxFields_possibleTypes: string[] = ['ThreadMaxFields']
    export const isThreadMaxFields = (obj?: { __typename?: any } | null): obj is ThreadMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadMaxFields"')
      return ThreadMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadMinFields_possibleTypes: string[] = ['ThreadMinFields']
    export const isThreadMinFields = (obj?: { __typename?: any } | null): obj is ThreadMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadMinFields"')
      return ThreadMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadMutationResponse_possibleTypes: string[] = ['ThreadMutationResponse']
    export const isThreadMutationResponse = (obj?: { __typename?: any } | null): obj is ThreadMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadMutationResponse"')
      return ThreadMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadStddevFields_possibleTypes: string[] = ['ThreadStddevFields']
    export const isThreadStddevFields = (obj?: { __typename?: any } | null): obj is ThreadStddevFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadStddevFields"')
      return ThreadStddevFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadStddevPopFields_possibleTypes: string[] = ['ThreadStddevPopFields']
    export const isThreadStddevPopFields = (obj?: { __typename?: any } | null): obj is ThreadStddevPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadStddevPopFields"')
      return ThreadStddevPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadStddevSampFields_possibleTypes: string[] = ['ThreadStddevSampFields']
    export const isThreadStddevSampFields = (obj?: { __typename?: any } | null): obj is ThreadStddevSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadStddevSampFields"')
      return ThreadStddevSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadSumFields_possibleTypes: string[] = ['ThreadSumFields']
    export const isThreadSumFields = (obj?: { __typename?: any } | null): obj is ThreadSumFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadSumFields"')
      return ThreadSumFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadVarPopFields_possibleTypes: string[] = ['ThreadVarPopFields']
    export const isThreadVarPopFields = (obj?: { __typename?: any } | null): obj is ThreadVarPopFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadVarPopFields"')
      return ThreadVarPopFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadVarSampFields_possibleTypes: string[] = ['ThreadVarSampFields']
    export const isThreadVarSampFields = (obj?: { __typename?: any } | null): obj is ThreadVarSampFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadVarSampFields"')
      return ThreadVarSampFields_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadVarianceFields_possibleTypes: string[] = ['ThreadVarianceFields']
    export const isThreadVarianceFields = (obj?: { __typename?: any } | null): obj is ThreadVarianceFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadVarianceFields"')
      return ThreadVarianceFields_possibleTypes.includes(obj.__typename)
    }
    


    const ToneEnum_possibleTypes: string[] = ['ToneEnum']
    export const isToneEnum = (obj?: { __typename?: any } | null): obj is ToneEnum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isToneEnum"')
      return ToneEnum_possibleTypes.includes(obj.__typename)
    }
    


    const ToneEnumAggregate_possibleTypes: string[] = ['ToneEnumAggregate']
    export const isToneEnumAggregate = (obj?: { __typename?: any } | null): obj is ToneEnumAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isToneEnumAggregate"')
      return ToneEnumAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const ToneEnumAggregateFields_possibleTypes: string[] = ['ToneEnumAggregateFields']
    export const isToneEnumAggregateFields = (obj?: { __typename?: any } | null): obj is ToneEnumAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isToneEnumAggregateFields"')
      return ToneEnumAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const ToneEnumMaxFields_possibleTypes: string[] = ['ToneEnumMaxFields']
    export const isToneEnumMaxFields = (obj?: { __typename?: any } | null): obj is ToneEnumMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isToneEnumMaxFields"')
      return ToneEnumMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const ToneEnumMinFields_possibleTypes: string[] = ['ToneEnumMinFields']
    export const isToneEnumMinFields = (obj?: { __typename?: any } | null): obj is ToneEnumMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isToneEnumMinFields"')
      return ToneEnumMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const ToneEnumMutationResponse_possibleTypes: string[] = ['ToneEnumMutationResponse']
    export const isToneEnumMutationResponse = (obj?: { __typename?: any } | null): obj is ToneEnumMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isToneEnumMutationResponse"')
      return ToneEnumMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const TypeEnum_possibleTypes: string[] = ['TypeEnum']
    export const isTypeEnum = (obj?: { __typename?: any } | null): obj is TypeEnum => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeEnum"')
      return TypeEnum_possibleTypes.includes(obj.__typename)
    }
    


    const TypeEnumAggregate_possibleTypes: string[] = ['TypeEnumAggregate']
    export const isTypeEnumAggregate = (obj?: { __typename?: any } | null): obj is TypeEnumAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeEnumAggregate"')
      return TypeEnumAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const TypeEnumAggregateFields_possibleTypes: string[] = ['TypeEnumAggregateFields']
    export const isTypeEnumAggregateFields = (obj?: { __typename?: any } | null): obj is TypeEnumAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeEnumAggregateFields"')
      return TypeEnumAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const TypeEnumMaxFields_possibleTypes: string[] = ['TypeEnumMaxFields']
    export const isTypeEnumMaxFields = (obj?: { __typename?: any } | null): obj is TypeEnumMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeEnumMaxFields"')
      return TypeEnumMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const TypeEnumMinFields_possibleTypes: string[] = ['TypeEnumMinFields']
    export const isTypeEnumMinFields = (obj?: { __typename?: any } | null): obj is TypeEnumMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeEnumMinFields"')
      return TypeEnumMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const TypeEnumMutationResponse_possibleTypes: string[] = ['TypeEnumMutationResponse']
    export const isTypeEnumMutationResponse = (obj?: { __typename?: any } | null): obj is TypeEnumMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeEnumMutationResponse"')
      return TypeEnumMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const UserAggregate_possibleTypes: string[] = ['UserAggregate']
    export const isUserAggregate = (obj?: { __typename?: any } | null): obj is UserAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserAggregate"')
      return UserAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const UserAggregateFields_possibleTypes: string[] = ['UserAggregateFields']
    export const isUserAggregateFields = (obj?: { __typename?: any } | null): obj is UserAggregateFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserAggregateFields"')
      return UserAggregateFields_possibleTypes.includes(obj.__typename)
    }
    


    const UserMaxFields_possibleTypes: string[] = ['UserMaxFields']
    export const isUserMaxFields = (obj?: { __typename?: any } | null): obj is UserMaxFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserMaxFields"')
      return UserMaxFields_possibleTypes.includes(obj.__typename)
    }
    


    const UserMinFields_possibleTypes: string[] = ['UserMinFields']
    export const isUserMinFields = (obj?: { __typename?: any } | null): obj is UserMinFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserMinFields"')
      return UserMinFields_possibleTypes.includes(obj.__typename)
    }
    


    const UserMutationResponse_possibleTypes: string[] = ['UserMutationResponse']
    export const isUserMutationResponse = (obj?: { __typename?: any } | null): obj is UserMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserMutationResponse"')
      return UserMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    

export const enumCategoryConstraint = {
   category_name_key: 'category_name_key' as const,
   category_pkey: 'category_pkey' as const
}

export const enumCategorySelectColumn = {
   categoryId: 'categoryId' as const,
   name: 'name' as const
}

export const enumCategoryUpdateColumn = {
   categoryId: 'categoryId' as const,
   name: 'name' as const
}

export const enumChatConstraint = {
   gpt_chat_conversation_link_key: 'gpt_chat_conversation_link_key' as const,
   gpt_chat_pkey: 'gpt_chat_pkey' as const
}

export const enumChatSelectColumn = {
   addedBy: 'addedBy' as const,
   chatId: 'chatId' as const,
   chatbotId: 'chatbotId' as const,
   conversationLink: 'conversationLink' as const
}

export const enumChatUpdateColumn = {
   addedBy: 'addedBy' as const,
   chatId: 'chatId' as const,
   chatbotId: 'chatbotId' as const,
   conversationLink: 'conversationLink' as const
}

export const enumChatbotCategoryConstraint = {
   chatbot_category_pkey: 'chatbot_category_pkey' as const
}

export const enumChatbotCategorySelectColumn = {
   categoryId: 'categoryId' as const,
   chatbotId: 'chatbotId' as const
}

export const enumChatbotCategoryUpdateColumn = {
   categoryId: 'categoryId' as const,
   chatbotId: 'chatbotId' as const
}

export const enumChatbotConstraint = {
   chatbot_name_key: 'chatbot_name_key' as const,
   chatbot_pkey: 'chatbot_pkey' as const
}

export const enumChatbotSelectColumn = {
   avatar: 'avatar' as const,
   chatbotId: 'chatbotId' as const,
   createdBy: 'createdBy' as const,
   defaultComplexity: 'defaultComplexity' as const,
   defaultLength: 'defaultLength' as const,
   defaultTone: 'defaultTone' as const,
   defaultType: 'defaultType' as const,
   description: 'description' as const,
   name: 'name' as const
}

export const enumChatbotUpdateColumn = {
   avatar: 'avatar' as const,
   chatbotId: 'chatbotId' as const,
   createdBy: 'createdBy' as const,
   defaultComplexity: 'defaultComplexity' as const,
   defaultLength: 'defaultLength' as const,
   defaultTone: 'defaultTone' as const,
   defaultType: 'defaultType' as const,
   description: 'description' as const,
   name: 'name' as const
}

export const enumComplexityEnumConstraint = {
   default_complexity_enum_pkey: 'default_complexity_enum_pkey' as const
}

export const enumComplexityEnumSelectColumn = {
   value: 'value' as const
}

export const enumComplexityEnumUpdateColumn = {
   value: 'value' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumLengthEnumConstraint = {
   default_length_enum_pkey: 'default_length_enum_pkey' as const
}

export const enumLengthEnumSelectColumn = {
   value: 'value' as const
}

export const enumLengthEnumUpdateColumn = {
   value: 'value' as const
}

export const enumMessageConstraint = {
   message_id_key: 'message_id_key' as const,
   message_pkey: 'message_pkey' as const
}

export const enumMessageSelectColumn = {
   content: 'content' as const,
   createdAt: 'createdAt' as const,
   messageId: 'messageId' as const,
   role: 'role' as const,
   threadId: 'threadId' as const
}

export const enumMessageTypeEnumConstraint = {
   message_type_enum_pkey: 'message_type_enum_pkey' as const
}

export const enumMessageTypeEnumSelectColumn = {
   value: 'value' as const
}

export const enumMessageTypeEnumUpdateColumn = {
   value: 'value' as const
}

export const enumMessageUpdateColumn = {
   content: 'content' as const,
   createdAt: 'createdAt' as const,
   messageId: 'messageId' as const,
   role: 'role' as const,
   threadId: 'threadId' as const
}

export const enumOrderBy = {
   ASC: 'ASC' as const,
   ASC_NULLS_FIRST: 'ASC_NULLS_FIRST' as const,
   ASC_NULLS_LAST: 'ASC_NULLS_LAST' as const,
   DESC: 'DESC' as const,
   DESC_NULLS_FIRST: 'DESC_NULLS_FIRST' as const,
   DESC_NULLS_LAST: 'DESC_NULLS_LAST' as const
}

export const enumPreferenceConstraint = {
   user_chatbot_preference_pkey: 'user_chatbot_preference_pkey' as const
}

export const enumPreferenceSelectColumn = {
   chatbotId: 'chatbotId' as const,
   favorite: 'favorite' as const,
   preferenceId: 'preferenceId' as const,
   preferredComplexity: 'preferredComplexity' as const,
   preferredLength: 'preferredLength' as const,
   preferredTone: 'preferredTone' as const,
   preferredType: 'preferredType' as const,
   userId: 'userId' as const
}

export const enumPreferenceSelectColumnPreferenceAggregateBoolExpBoolAndArgumentsColumns = {
   favorite: 'favorite' as const
}

export const enumPreferenceSelectColumnPreferenceAggregateBoolExpBoolOrArgumentsColumns = {
   favorite: 'favorite' as const
}

export const enumPreferenceUpdateColumn = {
   chatbotId: 'chatbotId' as const,
   favorite: 'favorite' as const,
   preferenceId: 'preferenceId' as const,
   preferredComplexity: 'preferredComplexity' as const,
   preferredLength: 'preferredLength' as const,
   preferredTone: 'preferredTone' as const,
   preferredType: 'preferredType' as const,
   userId: 'userId' as const
}

export const enumPromptChatbotConstraint = {
   prompt_chatbot_pkey: 'prompt_chatbot_pkey' as const
}

export const enumPromptChatbotSelectColumn = {
   chabotId: 'chabotId' as const,
   promptId: 'promptId' as const
}

export const enumPromptChatbotUpdateColumn = {
   chabotId: 'chabotId' as const,
   promptId: 'promptId' as const
}

export const enumPromptConstraint = {
   prompt_pkey: 'prompt_pkey' as const,
   prompt_prompt_id_key: 'prompt_prompt_id_key' as const
}

export const enumPromptSelectColumn = {
   content: 'content' as const,
   promptId: 'promptId' as const,
   promptName: 'promptName' as const,
   type: 'type' as const
}

export const enumPromptTypeEnumConstraint = {
   type_enum_pkey: 'type_enum_pkey' as const
}

export const enumPromptTypeEnumSelectColumn = {
   value: 'value' as const
}

export const enumPromptTypeEnumUpdateColumn = {
   value: 'value' as const
}

export const enumPromptUpdateColumn = {
   content: 'content' as const,
   promptId: 'promptId' as const,
   promptName: 'promptName' as const,
   type: 'type' as const
}

export const enumThreadConstraint = {
   thread_id_key: 'thread_id_key' as const,
   thread_pkey: 'thread_pkey' as const
}

export const enumThreadSelectColumn = {
   chatbotId: 'chatbotId' as const,
   createdAt: 'createdAt' as const,
   threadId: 'threadId' as const,
   updatedAt: 'updatedAt' as const,
   userId: 'userId' as const
}

export const enumThreadUpdateColumn = {
   chatbotId: 'chatbotId' as const,
   createdAt: 'createdAt' as const,
   threadId: 'threadId' as const,
   updatedAt: 'updatedAt' as const,
   userId: 'userId' as const
}

export const enumToneEnumConstraint = {
   default_tone_enum_pkey: 'default_tone_enum_pkey' as const
}

export const enumToneEnumSelectColumn = {
   value: 'value' as const
}

export const enumToneEnumUpdateColumn = {
   value: 'value' as const
}

export const enumTypeEnumConstraint = {
   default_type_enum_pkey: 'default_type_enum_pkey' as const
}

export const enumTypeEnumSelectColumn = {
   value: 'value' as const
}

export const enumTypeEnumUpdateColumn = {
   value: 'value' as const
}

export const enumUserConstraint = {
   user_email_key: 'user_email_key' as const,
   user_pkey: 'user_pkey' as const,
   user_username_key: 'user_username_key' as const
}

export const enumUserSelectColumn = {
   dateJoined: 'dateJoined' as const,
   email: 'email' as const,
   lastLogin: 'lastLogin' as const,
   password: 'password' as const,
   profilePicture: 'profilePicture' as const,
   userId: 'userId' as const,
   username: 'username' as const
}

export const enumUserUpdateColumn = {
   dateJoined: 'dateJoined' as const,
   email: 'email' as const,
   lastLogin: 'lastLogin' as const,
   password: 'password' as const,
   profilePicture: 'profilePicture' as const,
   userId: 'userId' as const,
   username: 'username' as const
}
