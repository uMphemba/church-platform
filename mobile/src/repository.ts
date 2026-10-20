// Sample mobile data. A future versioned API will replace these read functions.
export type Sermon={id:string;title:string;series:string;date:string;description:string};
export type Event={id:string;title:string;date:string;location:string;description:string};
export type Ministry={title:string;description:string};
export type Announcement={title:string;date:string;body:string};
export const church={name:'[Church name]',service:'[Service day and time]',location:'[Church address]'};
const sermons:Sermon[]=[
  {id:'1',title:'A community shaped by hope',series:'Sample series',date:'11 Oct 2026',description:'Sample sermon information. Approved media will be connected later.'},
  {id:'2',title:'Faith in everyday life',series:'Sample series',date:'4 Oct 2026',description:'Sample sermon information for screen review.'}
];
const events:Event[]=[
  {id:'1',title:'Community gathering',date:'7 Nov 2026',location:'[Venue to be confirmed]',description:'Sample event. Confirm all details before publication.'},
  {id:'2',title:'Prayer evening',date:'14 Nov 2026',location:'[Venue to be confirmed]',description:'Sample event. Confirm all details before publication.'}
];
const ministries:Ministry[]=[{title:'Children & families',description:'[Add approved ministry information.]'},{title:'Young adults',description:'[Add approved ministry information.]'},{title:'Community care',description:'[Add approved ministry information.]'}];
const announcements:Announcement[]=[{title:'Welcome to our mobile prototype',date:'18 Oct 2026',body:'Sample announcement. Replace with approved church news.'}];
export const repository={getSermons:()=>sermons,getEvents:()=>events,getMinistries:()=>ministries,getAnnouncements:()=>announcements};
