function superbowlWin(record) {
    for (const teamRecord of record) {
        if (teamRecord.result === 'W') {
            return teamRecord.year;
        }
    }

}