import React from "react";
import type { Article } from "./Article";

export type ArticleComponentProps = Article & {
  /**
   * Additional props for the article's title
   */
  titleProps?: React.ComponentPropsWithoutRef<"a">;

  /**
   * Additional props for the article's label
   */
  labelProps?: React.ComponentPropsWithoutRef<"div">;

  /**
   * Additional props for the article's author
   */
  authorProps?: React.ComponentPropsWithoutRef<"div">;

  /**
   * Additional props for the article's rating
   */
  ratingProps?: React.ComponentPropsWithoutRef<"div">;

  /**
   * Additional props for the article's description
   */
  descriptionProps?: React.ComponentPropsWithoutRef<"div">;

  /**
   * Additional props for the article's preview video
   */
  previewProps?: React.ComponentPropsWithoutRef<"video">;

  /**
   * Additional props for the article's thumbnail image
   */
  thumbnailProps?: React.ComponentPropsWithoutRef<"img">;
} & Omit<React.ComponentPropsWithoutRef<"article">, "id">;

export type ArticleViewProps = {
  articles: Article[];
} & React.ComponentPropsWithoutRef<"div">;
