import validatePasword from './js/validate-password';
import { addUser } from './js/api-service';

import onOpenModal from './js/on-open-modal';

onOpenModal.addEventListener('click', onOpenModal);

addUser('mango');