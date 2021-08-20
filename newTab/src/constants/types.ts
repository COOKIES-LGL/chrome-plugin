export interface SearchTabListType {
  label: string;
  value: string;
  children: SearchTabListChildType[];
}

export interface SearchTabListChildType {
  label: string;
  holdplace: string;
  url: string;
}
