CREATE (f1:Formation {name: 'Java', identifier : 1})
CREATE (f2:Formation {name: 'Python', identifier: 2})
CREATE (f3:Formation {name: 'C++', identifier: 3})
CREATE (m1:Module {name: 'Heritage', identifier: 1, url : 'https://docs.google.com/viewer?url=https://www.computer-pdf.com/pdf/0830-java-notes-for-professionals-book.pdf'})
CREATE (m2:Module {name: 'Classes', identifier: 2, url : 'https://docs.google.com/viewer?url=https://www.computer-pdf.com/pdf/0830-java-notes-for-professionals-book.pdf'})
CREATE (m3:Module {name: 'Polymorphisme', identifier: 3,  url : 'https://docs.google.com/viewer?url=https://www.computer-pdf.com/pdf/0830-java-notes-for-professionals-book.pdf'})
CREATE (m4:Module {name: 'Les interfaces', identifier: 4, url : 'https://docs.google.com/viewer?url=https://www.computer-pdf.com/pdf/0830-java-notes-for-professionals-book.pdf'})
CREATE (m5:Module {name: 'Tableau', identifier: 5, url : 'https://docs.google.com/viewer?url=https://www.computer-pdf.com/pdf/0830-java-notes-for-professionals-book.pdf'})
CREATE (m6:Module {name: 'Pointeurs', identifier: 6, url : 'https://docs.google.com/viewer?url=https://www.computer-pdf.com/pdf/0830-java-notes-for-professionals-book.pdf'})
// formation java 
CREATE (f1)-[:HAS]->(m1)
CREATE (f1)-[:HAS]->(m2)
CREATE (f1)-[:HAS]->(m3)
CREATE (f1)-[:HAS]->(m4)
// formation Python 
CREATE (f2)-[:HAS]->(m2)
CREATE (f2)-[:HAS]->(m5)
// fofmration c++ 
CREATE (f3)-[:HAS]->(m2)
CREATE (f3)-[:HAS]->(m6)


// TO DELETE ALL NODES 
MATCH (n) DETACH DELETE n;