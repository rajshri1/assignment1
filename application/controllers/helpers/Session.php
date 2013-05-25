<?php
class Zend_Controller_Action_Helper_Session extends Zend_Controller_Action_Helper_Abstract
{
    static $isSession;

    public function direct($namespace = 'user')
    {
        Zend_Session::start();
        if(!self::$isSession)
        {
            self::$isSession =  new Zend_Session_Namespace($namespace);
        }
        
        return self::$isSession;
    }
}