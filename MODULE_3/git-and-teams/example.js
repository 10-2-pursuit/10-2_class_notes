function simulateMergeConflict(oneVar, twoVar) {
    
    const originalText = `This is the original text.`;
    const incomingChanges = `Incoming changes from another branch.`;
    const currentChanges = `Your current changes.`;
  
    const mergedText = `${originalText}\n<<<<<<< Incoming Changes\n${incomingChanges}\n=======\n${currentChanges}\n>>>>>>> Current Changes`;
  
    console.log(mergedText);
  }
  
  // Call the function to simulate a merge conflict
  simulateMergeConflict();
  