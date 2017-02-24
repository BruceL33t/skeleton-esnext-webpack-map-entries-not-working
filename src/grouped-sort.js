export class GroupedSortValueConverter {
  toView(value) {
    console.log(value);
    const groups = new Map();
    
    for(let item of value) {
      let group = groups.get(item.group);
      if( group === undefined) {
        groups.set(item.group, [item]);
      } else {
        group.push(item); 
      }
    }
    console.log(groups)
    console.log(groups.entries())
    let sortedGroups = new Map([...groups.entries()].sort());
    console.log(sortedGroups)
    
    for(let [group, entries] of sortedGroups) {
      entries.sort((a,b) => {
        const nameA=a.name.toLowerCase(), 
              nameB=b.name.toLowerCase();
       
        if (nameA < nameB) { //sort string ascending
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    
    return sortedGroups;
  }
} 