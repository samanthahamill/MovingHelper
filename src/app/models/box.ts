export interface Box {
  id: string;
  name: string;
  size: BoxSizes;
  description: string;
  roomContents: RoomType;
  image_url: string;
}

export enum BoxSizes {
  UNKNOWN, 
  SMALL,
  MEDIUM,
  PICTURE,
  LARGE,
  LARGE_PICTURE,
  X_LARGE,
  TV
}

// TODO eventually don't have this as a enum, or have it as something
// the user can add other rooms too
export enum RoomType {
  UNKNOWN = "unknown",
  LIVING = "living room",
  DINING = "dining room",
  KITCHEN = "kitchen",
  BEDROOM_1 = "bedroom 1",
  BEDROOM_2 = "bedroom 2",
  BEDROOM_3 = "bedroom 3",
  MASTER_BEDROOM = "master bedroom",
  MASTER_BATHROOM = "master bathroom",
  BATHROOM_1 = "bathroom 1",
  BATHROOM_2 = "bathroom 2",
  BATHROOM_3 = "bathroom 3",
  BASEMENT = "basement",
  ATTIC = "attic",
  GARAGE = "garage",
  STORAGE = "storage",
  LINEN = "linen",
  CLOSET = "closet",
  PARLOR = "parlor",
  FOYER = "foyer",
  FRONTYARD = "front yard",
  BACKYARD = "back yard"
}