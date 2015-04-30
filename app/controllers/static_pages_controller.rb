class StaticPagesController < ApplicationController

  def index
  end
  
  def about
  end

  def resume
  end

  def resume_pdf
    send_file(
        "#{Rails.root}/public/johnfuller-resume.pdf",
        filename: "JohnFuller-Resume.pdf",
        type: "application/pdf"
      )
  end

  def work
  end
end
