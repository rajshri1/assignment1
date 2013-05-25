<?php
class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
    protected function _initAction()
    {
        // Action Helpers
        Zend_Controller_Action_HelperBroker::addPath(
                APPLICATION_PATH .'/controllers/helpers');

    }
    protected function _initView()
    {
        // Initialize view
        $view = new Zend_View();
        $view->doctype('XHTML1_STRICT');
        $view->headTitle('Twitter Assignment');
 
        // Add it to the ViewRenderer
        $viewRenderer = Zend_Controller_Action_HelperBroker::getStaticHelper(
            'ViewRenderer'
        );
        $viewRenderer->setView($view);
 
        // Return it, so that it can be stored by the bootstrap
        return $view;
    }
    
    public function _initAutoload()
    {
        $autoloader = Zend_Loader_Autoloader::getInstance();
        $autoloader->registerNamespace("Petra_");

                // Added recently - not helping :(
        $moduleLoader = new Zend_Application_Module_Autoloader(array(
                'namespace' => '',
                'basePath' => APPLICATION_PATH . '/modules'

                ));
        return $moduleLoader;

    }
}