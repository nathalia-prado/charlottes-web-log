import data from '../data/recent-entries.ts'
import RecentEntry from './RecentEntry.tsx'

function RecentEntries() {
    return (
        <div>
            {data.map(entry => <RecentEntry key={entry.id} {...entry} />)}
        </div>
    )
}

export default RecentEntries