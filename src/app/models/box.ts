import { RoomType } from "./room";

export interface Box {
  // input created by form manager
  id: string;
  creationDate: Date;
  image_url: string;

  // inputs provided by user
  name: string;
  size: BoxSize;
  description?: string;
  associatedRoom: RoomType;
}

export enum BoxSize {
  UNKNOWN = "Unknown Size", 
  SMALL = "Small",
  MEDIUM = "Medium",
  PICTURE = "Picture",
  LARGE = "Large",
  LARGE_PICTURE = "Large Picture",
  X_LARGE = "Extra-Large",
  TV = "TV",
  BOOK = "Book",
}

export const boxSizeToNumber = (size: BoxSize): number =>
{
  switch(size)
  {
    case BoxSize.SMALL:
      return 0;
    case BoxSize.BOOK:
      return 1;
    case BoxSize.MEDIUM:
      return 2;
    case BoxSize.PICTURE:
      return 3;
    case BoxSize.LARGE:
      return 4;
    case BoxSize.LARGE_PICTURE:
      return 5;
    case BoxSize.X_LARGE:
      return 6;
    case BoxSize.TV:
      return 7;
    case BoxSize.UNKNOWN: 
    default: 
      return -1;
  }
}

export const boxSizeToUrl = (type: BoxSize): string =>
{
    switch(type)
    {
      case BoxSize.SMALL:
        return "small-box.jpg";
      case BoxSize.MEDIUM:
        return "medium-box.jpg";
      case BoxSize.PICTURE:
        return "picture-box.jpg";
      case BoxSize.LARGE:
        return "large-box.jpg";
      case BoxSize.LARGE_PICTURE:
        return "large-mirror-box.jpg";
      case BoxSize.X_LARGE:
        return "extra-large-box.jpg";
      case BoxSize.TV:
        return "tv-box.jpg";
      case BoxSize.BOOK:
        return "book-box.jpg";
      case BoxSize.UNKNOWN: 
      default: 
        return "unknown.png";
    }
}
