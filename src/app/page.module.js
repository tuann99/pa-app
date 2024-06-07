import { json } from "stream/consumers"

export default function SummaryStats() {
    let mean = mean(column)
    let median = median(column)
    let count = length(column)
    let stdev = stdev(column)

    summaryStats = json(mean, median, count, stdev)
    return summaryStats
}