<?php
Class Application_Form_Followerform extends Zend_Form
{
    public function __construct($options = null) 
    {
        parent::init($options);
        
        $this->setMethod("POST")
             ->setAction("../index.php/index");
        
        $twitterHandle = new Zend_Form_Element_Text('twitterhandle');
        $twitterHandle->setDecorators(array('ViewHelper'))
                      ->setRequired(true)
                      ->setErrorMessages(array('Please enter valid twitter handle'));
        
        $go = new Zend_Form_Element_Button('go');
        $go->setLabel('Go')
           ->setDecorators(array('ViewHelper'));
        
        $this->addElements(
                            array(
                                    $twitterHandle,
                                    $go
                                 )
                         );
    }
    
}