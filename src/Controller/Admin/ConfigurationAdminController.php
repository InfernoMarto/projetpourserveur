<?php

namespace App\Controller\Admin;

use Doctrine\ODM\MongoDB\DocumentManager;
use Sonata\AdminBundle\Controller\CRUDController as Controller;

class ConfigurationAdminController extends Controller
{
    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
    }

    public function listAction()
    {
        $configuration = $this->dm->get('Configuration')->findConfiguration();

        if ($configuration) {
            return $this->redirect($this->admin->generateUrl('edit', ['id' => $configuration->getId()]));
        } else {
            return $this->redirect($this->admin->generateUrl('create'));
        }
    }

    public function deleteAction($id)
    {
        // do nothing
        $this->addFlash('sonata_flash_error', 'Impossible de supprimer la configuration, cette action est interdite car est elle casserait toute votre carte');

        return $this->redirect($this->admin->generateUrl('edit', ['id' => $id]));
    }
}
