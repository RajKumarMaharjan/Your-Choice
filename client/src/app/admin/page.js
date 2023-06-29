'use client';
import Link from 'next/link';
import Appbar from '../components/Appbar/page'

function AdminDashboard() {
  return (
    <div>
          <Appbar/>
        <Link href="/admin/add-item">Add Items</Link>
    </div>
)
}
export default AdminDashboard;
