import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  listRepos?: Maybe<Array<Maybe<RepoIntro>>>;
  repoDetails?: Maybe<Array<Maybe<RepoDetails>>>;
};

export type Repo = {
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
};

export type RepoDetails = Repo & {
  __typename?: 'RepoDetails';
  activeWebHooks?: Maybe<Array<WebHook>>;
  fileCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  ymlContent?: Maybe<Scalars['String']['output']>;
};

export type RepoIntro = Repo & {
  __typename?: 'RepoIntro';
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
};

export type WebHook = {
  __typename?: 'WebHook';
  created_at?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Repo: ( RepoDetails ) | ( RepoIntro );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Repo: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Repo']>;
  RepoDetails: ResolverTypeWrapper<RepoDetails>;
  RepoIntro: ResolverTypeWrapper<RepoIntro>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  WebHook: ResolverTypeWrapper<WebHook>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  Query: {};
  Repo: ResolversInterfaceTypes<ResolversParentTypes>['Repo'];
  RepoDetails: RepoDetails;
  RepoIntro: RepoIntro;
  String: Scalars['String']['output'];
  WebHook: WebHook;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  listRepos?: Resolver<Maybe<Array<Maybe<ResolversTypes['RepoIntro']>>>, ParentType, ContextType>;
  repoDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['RepoDetails']>>>, ParentType, ContextType>;
}>;

export type RepoResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Repo'] = ResolversParentTypes['Repo']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RepoDetails' | 'RepoIntro', ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type RepoDetailsResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['RepoDetails'] = ResolversParentTypes['RepoDetails']> = ResolversObject<{
  activeWebHooks?: Resolver<Maybe<Array<ResolversTypes['WebHook']>>, ParentType, ContextType>;
  fileCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  public?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ymlContent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RepoIntroResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['RepoIntro'] = ResolversParentTypes['RepoIntro']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WebHookResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['WebHook'] = ResolversParentTypes['WebHook']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Repo?: RepoResolvers<ContextType>;
  RepoDetails?: RepoDetailsResolvers<ContextType>;
  RepoIntro?: RepoIntroResolvers<ContextType>;
  WebHook?: WebHookResolvers<ContextType>;
}>;

