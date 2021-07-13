import React from 'react';
import Button from '../Button';
import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavortiteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon
    
} from './styles';

const MenuBar: React.FC = () => {
  return(
      <Container>
          <Topside>
              <Logo />

              <MenuButton>
                    <HomeIcon />
                    <span>Pagina Incial</span>
              </MenuButton>

              <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
              </MenuButton>

              <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
              </MenuButton>

              <MenuButton>
                    <FavortiteIcon />
                    <span>Favoritos</span>
              </MenuButton>

              <MenuButton>
                    <ProfileIcon className="active"/>
                    <span>Perfil</span>
              </MenuButton>

              <Button>
                  <span>Tweetar</span>
              </Button>

          </Topside>

          <Botside>
              <Avatar />

              <ProfileData>
                  <strong>Alessandro Cruz</strong>
                  <span>@AlessandroCruz</span>
              </ProfileData>

              <ExitIcon />

          </Botside>
      </Container>
  );
}

export default MenuBar;