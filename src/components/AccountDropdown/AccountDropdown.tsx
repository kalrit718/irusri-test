import './AccountDropdown.css';
import { Dropdown } from 'react-bootstrap';
import { useAuth } from '@hooks/useAuth';

export default function AccountDropdown() {
  const { user, logout } = useAuth();

  return (
    <Dropdown as='span'>
      <Dropdown.Toggle variant='muted' as='span'>
        { user?.name }
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => logout()}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
