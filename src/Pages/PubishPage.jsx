import Sidebar from '../Components/Sidebar';
import Publish from '../Components/Publish';

export default function PublishPage() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* Sidebar */}
        <div className='col-2'>
          <div style={{ position: 'fixed', top: 0, left: 0, width: '16.6667%', height: '100vh' }}>
            <Sidebar />
          </div>
        </div>
        
        {/* Main Content (Profile) */}
        <div className='col-10' style={{ marginLeft: '16.6667%' }}>
          <div className='mt-5'>
            <Publish />
          </div>
        </div>
      </div>
    </div>
  );
}
