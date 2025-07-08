export interface LiffProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
}

export interface LiffContext {
  type: 'utou' | 'room' | 'group' | 'square_chat';
  viewType: 'compact' | 'tall' | 'full';
  userId?: string;
  utouId?: string;
  roomId?: string;
  groupId?: string;
  squareChatId?: string;
}

export interface LiffData {
  language: string;
  context: LiffContext;
}