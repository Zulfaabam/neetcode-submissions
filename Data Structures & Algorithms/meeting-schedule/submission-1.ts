/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        const sortedIntervals = intervals.sort((a, b) => a.start - b.start)

        for (let i = 0; i < sortedIntervals.length; i++) {
            for (let j = i + 1; j < sortedIntervals.length; j++) {
                if (sortedIntervals[i].end > sortedIntervals[j].start) {
                    return false
                }
            }
        }

        return true
    }
}
