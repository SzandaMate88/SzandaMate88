'use strict';

import {BlogPost} from './BlogPost';

const book1 : BlogPost = new BlogPost('John Doe', 'Lorem Ipsum','2000.05.04', 'Lorem ipsum dolor sit amet.');
const book2 : BlogPost = new BlogPost('Wait but why', 'Tim Urban','2010.10.10', 'A popular long-form, stick-figure-illustrated blog about almost everything.');
const book3 : BlogPost = new BlogPost('One Engineer Is Trying to Get IBM to Reckon With Trump','William Turton','2017.03.28','Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.');

console.log(book1);
console.log(book2);
console.log(book3);