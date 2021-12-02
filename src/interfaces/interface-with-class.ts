// NOTES: ------------------------------------------------------------ //
// This is useful when you have a large inheritance hierarchy, but want to specify
// that your code works with only subclasses that have certain properties.
// The subclasses don’t have to be related besides inheriting
// from the base class. For example:

interface BaseBook {
  title: string;
  writer: string;
  pages: number;
  isPublish: boolean;
  detailBook(): string;
}

class Book implements BaseBook {
  constructor(
    public title: string,
    public writer: string,
    public pages: number,
    readonly isPublish: boolean
  ) {
    this.title = title;
    this.writer = writer;
    this.pages = 200;
    this.isPublish = true;
  }

  detailBook() {
    return `Title: ${this.title}, 
            Writer: ${this.writer}, 
            Pages: ${this.pages}, 
            Is Publish: ${this.isPublish}`;
  }
}
