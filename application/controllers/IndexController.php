<?php
class IndexController extends Zend_Controller_Action
{
    public function init()
    {
         $this->sessionValue = $this->_helper->Session()->session_val;
         $this->view->sessionValue = $this->sessionValue;
    }

    public function indexAction()
    {
        $formObj = new Application_Form_Followerform();
        $request= $this->getRequest();
        if($request->isPost())
        {
            if($formObj->isValid($request->getPost()))
            {
                $postedValues = $request->getPost();
            }
        }
        
        $this->view->form = $formObj;
        $this->view->errorMessages = $formObj->getMessages();
    }
    
    public function followerDetailsAction()
    {
        if($this->getRequest()->isGet())
        {
            $param['page'] = htmlentities($this->_getParam('page'));
            $param['twitterhandle'] = htmlentities($this->_getParam('twitterhandle'));
            $param['cursor'] = htmlentities($this->_getParam('cursor'));
            
            if($param['twitterhandle'])
            {
                if(($param['twitterhandle'] && $this->sessionValue['screen_name']) && ($param['twitterhandle'] != $this->sessionValue['screen_name']))
                {
                    Zend_Session::destroy();
                }
                
                if($this->sessionValue['followerArr'] > 0 && $param['cursor'] == '')
                {
                    $followerArr = $this->sessionValue['followerArr'];
                    $this->view->twitterHandle = $this->sessionValue['screen_name'];
                    $this->view->followerCount = $this->sessionValue['followers_count'];
                    $this->view->nextCursor = $this->sessionValue['nextcursor'];
                }
                elseif(($this->sessionValue['followerArr'] > 0 && $param['cursor']) || !$this->sessionValue['followerArr'])
                {
                    //Getting Entered User's Details
                    $userDetailUrl = file_get_contents('https://api.twitter.com/1/users/show.json?screen_name='.$param['twitterhandle'].'&include_entities=true');
                    $userDetails = json_decode($userDetailUrl);
                    if($userDetails)
                    {
                        $this->view->twitterHandle = $followerSession['screen_name'] = $userDetails->screen_name;
                        $this->view->followerCount = $followerSession['followers_count'] = $userDetails->followers_count;

                        //Getting user's followers
                        $jsonUrl = file_get_contents('http://api.twitter.com/1/statuses/followers/'.$followerSession['screen_name'].'.json?cursor='.$param['cursor']);
                        $followerDetails = json_decode($jsonUrl);
                        
                        $this->view->nextCursor = $followerSession['nextcursor'] = $followerDetails->next_cursor_str;
                        
                        $followerSession['followerArr'] = $followerArr = (($this->sessionValue['followerArr'] > 0 )?array_merge($followerDetails->users,$this->sessionValue['followerArr']):$followerDetails->users);
                        $this->_helper->Session()->session_val = $followerSession;
                    }
                }
                
                if(count($followerArr) > 0)
                {
                    $this->view->paginator = Zend_Paginator::factory($followerArr);
                    $this->view->paginator->setItemCountPerPage(30);
                    $this->view->paginator->setPageRange(10);
                    $this->view->paginator->setCurrentPageNumber($param['page']);
                }
            }
        }
    }
}
