@extends('layouts.app')

@section('content')

        <div class="container">

            <div class="row">

                <div class="col-md-4 col-md-offset-4">

                    <div class="shorten">

                        <h1>Free Short URL Service</h1>

                        {!! Form::open(array('url' => 'shorten','id' => 'shorten')) !!}
                            {!! Form::text('url','',array('class'=>'url','placeholder'=>'http://','autocomplete'=>'off')) !!}
                            {!!$errors->first('url','<span class="help-block">:message</span>')!!}
                            {!! Form::button('Do it',array('type'=>'submit')) !!}
                        {!! Form::close() !!}

                        <img src="img/roflcopter.gif" alt="Ridiculously short URL's!" />

                    </div>

                </div>

            </div>

        </div>

@stop